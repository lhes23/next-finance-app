import { prisma } from "@/prisma/prismaInit"
import { compare } from "bcrypt"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
  const body = await req.json()
  const { username, password } = body
  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })

  if (!user) return NextResponse.json({ error: "User not found" })

  const match = await compare(password, user.password)
  if (!match) return NextResponse.json({ error: "Wrong password" })

  return NextResponse.json(user)
}
