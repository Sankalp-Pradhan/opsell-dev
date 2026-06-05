// app/api/email-signup/route.ts

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    const existingUser = await db.collection("users").findOne({
      email,
    });

    if (!existingUser) {
      await db.collection("users").insertOne({
        email,
        provider: "email",
        createdAt: new Date(),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Email saved successfully",
    });
  } catch (error) {
    console.error("Email Signup Error:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}