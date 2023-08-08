import { NextResponse } from "next/server"
import { prisma } from "@/prisma/prismaInit"

export const GET = async () => {
  const budgets = await prisma.budget.findMany()
  return NextResponse.json(budgets)
}

export const POST = async (req: Request) => {
  const data = await req.json()
  const budget = await prisma.budget.create({
    data
  })
  return NextResponse.json(budget)
}
