import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  company?: string;
  email?: string;
  budget?: string;
  help?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const { name, email, budget, help } = body;
  if (!name || !email || !budget || !help) {
    return NextResponse.json({ error: "Missing required fields: name, email, budget, help." }, { status: 400 });
  }
  // TODO: forward to CRM / email
  console.log("[lead]", { ...body, receivedAt: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}
