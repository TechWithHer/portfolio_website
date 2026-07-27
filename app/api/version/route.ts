import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    application: "Portfolio Website",
    version: process.env.npm_package_version || "1.0.0",
    environment: process.env.NODE_ENV,
    buildTime: process.env.BUILD_TIME || "Local Build",
    commit: process.env.GIT_COMMIT || "Development",
    branch: process.env.GIT_BRANCH || "local",
  });
}
