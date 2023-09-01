import { prisma } from "@/prisma/prismaInit"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  const users = await prisma.user.findMany({})
  return NextResponse.json(users)
}

export const POST = async (req: Request) => {
  const body = await req.json()
  const { email, username, password } = body
  const hashPassword = await hash(password, 10)
  const user = await prisma.user.upsert({
    where: {
      username,
    },update:{
      password:hashPassword
    },create:{
      username,
      password:hashPassword,
      email
    }
  })
  // if (!user) return NextResponse.json(user, { status: 401 })
  return NextResponse.json(user)
}
