import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import crypto from "crypto";

// Supabase client
const supabase = createClient(
  'https://ddxxlackdubmlmzefsde.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkeHhsYWNrZHVibWxtemVmc2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MDMwMjEsImV4cCI6MjA3MDE3OTAyMX0.PGQT8DklBSkZHIcjdT2LesxWUSBX9c6vMCsi43NwS4U'
);

// Email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.example.com", // Replace with your SMTP host
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Send registration email and insert new user into Supabase
export async function PUT(req) {
  try {
    const { email, firstName, lastName, isCourse } = await req.json();

    // Generate temporary password
    const password = crypto.randomBytes(8).toString("hex");

    // Send welcome email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Unlocking the Path to Excellence",
      html: `
        <h1>Welcome ${firstName}!</h1>
        <p>Thank you for joining our course. Here are your access details:</p>
        <p><strong>Course URL:</strong> <a href="https://darikalexander.com/access">https://darikalexander.com/access</a></p>
        <p><strong>Login Credentials:</strong></p>
        <ul>
          <li>Email: ${email}</li>
          <li>Password: ${password}</li>
        </ul>
        <p>Please change your password after your first login.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Save user record in Supabase
    const { error } = await supabase.from("orders").insert([
      {
        email,
        firstName,
        lastName,
        isCourse,
        password,
        status: "pending",
      },
    ]);

    if (error) throw new Error(error.message);

    return NextResponse.json({ message: "Registration successful" }, { status: 200 });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}

// Fetch all orders from Supabase
export async function GET() {
  try {
    const { data, error } = await supabase.from("orders").select("*");

    if (error) throw new Error(error.message);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

// Create or update an order in Supabase
export async function POST(req) {
  try {
    const newOrder = await req.json();
    const orderWithId = {
      ...newOrder,
      id: newOrder.id || Date.now().toString(),
      status: newOrder.status || "pending",
    };

    // Remove existing order with same id

    // Insert new order
    const { error } = await supabase.from("orders").insert([orderWithId]);

    if (error) throw new Error(error.message);

    return NextResponse.json({ message: "Order saved successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
