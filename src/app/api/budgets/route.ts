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
  let budgAmt = data.budgetAmount
  if (budgAmt.includes("+")) {
    budgAmt = data.budgetAmount
      .split("+")
      .map((c: string) => Number(c))
      .reduce((a: number, c: number) => a + c)
      .toString()
  }
  const budget = await prisma.budget.create({
    data: {
      budgetName: data.budgetName,
      budgetType: data.budgetType,
      budgetAmount: budgAmt
    }
  })
  return NextResponse.json(budget)
}
