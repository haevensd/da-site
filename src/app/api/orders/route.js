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
    const { email, firstName, lastName, isCourse } = await req.json();
    
    // Generate temporary password
    const password = crypto.randomBytes(8).toString('hex');
    
    // Email content
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

const ordersFilePath = path.join(process.cwd(), "orders.json");

// Initialize orders file if it doesn't exist
if (!fs.existsSync(ordersFilePath)) {
  fs.writeFileSync(ordersFilePath, JSON.stringify([], null, 2));
}

export async function GET() {
  try {
    const data = fs.readFileSync(ordersFilePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: "Failed to read orders file" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    let newOrder = await req.json();

    // Handle nested newOrder like: { "0": { ...actualOrder } }
   // if (typeof newOrder === 'object' && Object.keys(newOrder).length === 1 && newOrder["0"]) {
      //newOrder = newOrder["0"];
    //}

    // Read existing orders
    let orders = [];
    let errorMessage;
    
    try {
      const data = fs.readFileSync(ordersFilePath, "utf8");
      orders = JSON.parse(data);
    } catch (_) {
      // If file doesn't exist or is unreadable, start with empty array
    }

    // Remove any existing order with the same id (or matching content)
    orders = orders.filter(order => order.id !== newOrder.id);
    
    // Add the new order
    orders.push({
      id: Date.now().toString(),
      ...newOrder,
      status: 'pending'
    });

    // Save updated orders
    try {
      fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    } catch (e) {
      errorMessage = e.message;
    }
    return NextResponse.json({ message: "Order saved successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}
