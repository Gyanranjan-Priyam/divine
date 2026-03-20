import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || "";

// GET all notices
export async function GET() {
  try {
    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=getAll`, {
      method: "GET",
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch notices" },
      { status: 500 }
    );
  }
}

// CREATE notice (protected)
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    
    console.log("📝 Creating notice:", body);
    console.log("📡 Apps Script URL:", GOOGLE_APPS_SCRIPT_URL);

    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("📬 Response status:", response.status);
    
    const text = await response.text();
    console.log("📄 Response text:", text);
    
    try {
      const data = JSON.parse(text);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid response from server: " + text.substring(0, 200) },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("❌ Error creating notice:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create notice: " + (error as Error).message },
      { status: 500 }
    );
  }
}

// UPDATE notice (protected)
export async function PUT(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update notice" },
      { status: 500 }
    );
  }
}

// DELETE notice (protected)
export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Notice ID is required" },
        { status: 400 }
      );
    }

    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete notice" },
      { status: 500 }
    );
  }
}
