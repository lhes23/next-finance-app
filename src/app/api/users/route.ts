import { prisma } from "@/prisma/prismaInit"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  const users = await prisma.user.findMany({})
  return NextResponse.json(users)
}

export const POST = async (req: Request) => {
  const body = await req.json()
  const user = await prisma.user.findUnique({
    where: {
      username: body.username,
      password: body.password
    }
  })
  if (!user) return NextResponse.json(user, { status: 401 })
  return NextResponse.json(user)
}
