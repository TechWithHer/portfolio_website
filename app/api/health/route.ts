import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "UP",
    application: "ayushisingh.com",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
}
