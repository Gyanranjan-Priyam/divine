/**
 * Password Hash Generator Utility
 * 
 * Run this script to generate a bcrypt hash for your admin password.
 * Add the output to your .env.local file as ADMIN_PASSWORD_HASH
 * 
 * Usage:
 * node scripts/generate-hash.js yourpassword
 */

const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('❌ Please provide a password as argument');
  console.error('Usage: node scripts/generate-hash.js yourpassword');
  process.exit(1);
}

const saltRounds = 10;
const hash = bcrypt.hashSync(password, saltRounds);

console.log('\n✅ Password hash generated successfully!\n');
console.log('Add this to your .env.local file:\n');
console.log(`ADMIN_PASSWORD_HASH="${hash}"`);
console.log(`ADMIN_USERNAME="admin"`);
console.log(`NEXTAUTH_SECRET="${require('crypto').randomBytes(32).toString('hex')}"`);
console.log(`GOOGLE_APPS_SCRIPT_URL="your_deployment_url_here"`);
console.log('\n');
