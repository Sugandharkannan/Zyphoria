import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "bookings.json");

// Helper to read bookings from JSON file
function readBookings(): any[] {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading bookings file:", error);
    return [];
  }
}

// Helper to write bookings to JSON file
function writeBookings(bookings: any[]) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing bookings file:", error);
  }
}

// Basic Authentication check (User ID: admin, Password: admin123)
function isAuthorized(request: Request): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }
  const base64Credentials = authHeader.split(" ")[1];
  try {
    const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
    const [userId, password] = credentials.split(":");
    return userId === "admin" && password === "admin123";
  } catch (e) {
    return false;
  }
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const bookings = readBookings();
  return NextResponse.json(bookings);
}

export async function POST(request: Request) {
  try {
    const newBooking = await request.json();
    if (!newBooking.id || !newBooking.name || !newBooking.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    
    const bookings = readBookings();
    bookings.unshift(newBooking);
    writeBookings(bookings);
    
    return NextResponse.json({ success: true, booking: newBooking });
  } catch (error) {
    console.error("Error saving booking:", error);
    return NextResponse.json({ error: "Failed to save booking" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const clearAll = searchParams.get("clearAll") === "true";

    if (clearAll) {
      writeBookings([]);
      return NextResponse.json({ success: true });
    }

    if (!id) {
      return NextResponse.json({ error: "Booking ID is required" }, { status: 400 });
    }

    let bookings = readBookings();
    bookings = bookings.filter((b: any) => b.id !== id);
    writeBookings(bookings);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json({ error: "Failed to delete booking" }, { status: 500 });
  }
}
