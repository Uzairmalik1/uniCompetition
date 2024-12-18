import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Named export for POST method
export async function POST(request: Request) {
  try {
    // Parse the incoming JSON body
    const data = await request.json();
    const { name, email, message } = data;

    // Validate form fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Save data to the database
    const newMessage = await prisma.contactUs.create({
      data: { name, email, message },
    });

    console.log("Form data saved:", newMessage);

    // Send a success response
    return NextResponse.json(
      { message: "Thank you for your message!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Close the Prisma connection
  }
}
