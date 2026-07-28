import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const file = path.join(process.cwd(), "public", "version.json");

  const version = JSON.parse(await fs.readFile(file, "utf8"));

  return Response.json(version);
}
