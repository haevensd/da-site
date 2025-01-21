import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

// Configure email transporter
const transporter = nodemailer.createTransport({
  // Add your email service configuration here
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function PUT(req) {
  try {
    const { email, name,  } = await req.json();

    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Work Request",
      html: `
        <h1>${name},</h1>
        <p>Has indicated they would like to work together.</p>
        <p>You can reach them back at ${email}</p>
      `,
    };
console.log('dew')
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Save user data (implement your database logic here)
    
    return NextResponse.json({ 
      message: "Registration successful",
      status: 200 
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ 
      error: "Registration failed", 
      status: 500 
    });
  }
}
