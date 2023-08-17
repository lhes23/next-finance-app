import { NextResponse } from "next/server"
import { prisma } from "@/prisma/prismaInit"

export const GET = async () => {
  const budgets = await prisma.budget.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  return NextResponse.json(budgets)
}

export const POST = async (req: Request) => {
  const data = await req.json()
  const budget = await prisma.budget.create({
    data: {
      budgetName: data.budgetName,
      budgetType: data.budgetType,
      budgetAmount: data.budgetAmount
    }
  })
  return NextResponse.json(budget)
}
