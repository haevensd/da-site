import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

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
    const newOrder = await req.json();
    
    // Read existing orders
    let orders = [];
    try {
      const data = fs.readFileSync(ordersFilePath, "utf8");
      orders = JSON.parse(data);
    } catch (error) {
      // If file doesn't exist or is empty, start with empty array
    }
    
    // Add new order
    orders.push({
      id: Date.now().toString(),
      ...newOrder,
      status: 'pending'
    });
    
    // Save updated orders
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    
    return NextResponse.json({ message: "Order saved successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}