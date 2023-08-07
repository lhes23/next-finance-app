import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
  return NextResponse.json({ hello: "world" })
}

export const POST = async (req: Request) => {
  const body = await req.json()
  return NextResponse.json(body)
}
