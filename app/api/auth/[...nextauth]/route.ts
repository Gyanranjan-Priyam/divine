import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          console.log("❌ Missing credentials");
          return null;
        }

        // Check against environment variables
        const validUsername = process.env.ADMIN_USERNAME || "admin";
        // Hardcoded hash for "Divine@root2026" - env var has escaping issues
        const validPasswordHash = "$2b$10$A4rIcdaHKjKpQ.5VgSSfEeXwAB/7eKnHrLYVwJZEPINHnf83qQ5ae";

        console.log("🔐 Login attempt:", {
          username: credentials.username,
          validUsername,
          hasPasswordHash: validPasswordHash.length > 0,
          hashPrefix: validPasswordHash.substring(0, 7)
        });

        if (credentials.username !== validUsername) {
          console.log("❌ Username mismatch");
          return null;
        }

        // Compare password with hash
        const isValid = await bcrypt.compare(
          credentials.password,
          validPasswordHash
        );

        console.log("🔑 Password check result:", isValid);

        if (!isValid) {
          console.log("❌ Invalid password");
          return null;
        }

        console.log("✅ Login successful");
        return {
          id: "1",
          name: validUsername,
          email: `${validUsername}@divine.edu`,
        };
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).id = token.id as string;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
