import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const ordersFilePath = path.join(process.cwd(), "orders.json");

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
    const updatedOrders = await req.json();
    fs.writeFileSync(ordersFilePath, JSON.stringify(updatedOrders, null, 2), "utf8");
    return NextResponse.json({ message: "Orders updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save orders file" }, { status: 500 });
  }
}
