import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);

  // TODO: forward to your tooling (uncomment and set env var)
  // await fetch(process.env.N8N_WEBHOOK_URL!, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data)
  // });

  console.log("Form submission:", data);
  return NextResponse.json({ success: true });
}
