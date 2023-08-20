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

  if (!user) return NextResponse.json({ error: "No Username" }, { status: 401 })

  const match = await compare(password, user.password)
  if (!match)
    return NextResponse.json({ error: "Wrong Password" }, { status: 401 })

  return NextResponse.json({
    id: user.id,
    email: user.email,
    username: user.username
  })
}
