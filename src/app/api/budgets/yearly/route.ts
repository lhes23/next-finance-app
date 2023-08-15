import { prisma } from "@/prisma/prismaInit"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  const yearly_budget = await prisma.yearlyBudget.findMany()
  // const yearly_budget = await prisma.budget.findMany({
  //   where: {
  //     createdAt: {
  //       gt: new Date("2024"),
  //       lt: new Date("2025")
  //     }
  //   }
  // })
  return NextResponse.json(yearly_budget)
}

export const POST = async (req: Request) => {
  const data = await req.json()
  const year = parseInt(data.year)
  const month = data.month
  const budgetAmount = Number(data.budgetAmount)
  const monthYear = await prisma.yearlyBudget.findFirst({
    where: { year, month }
  })

  let update
  if (data.budgetType === "income") {
    update = {
      income: monthYear ? monthYear.income + budgetAmount : 0
    }
  } else {
    update = {
      expense: monthYear ? monthYear.expense + budgetAmount : 0
    }
  }

  const where = {
    YearlyBudgetId: {
      year,
      month
    }
  }

  const upsertBudget = await prisma.yearlyBudget.upsert({
    where,
    update,
    create: {
      year,
      month,
      income: budgetAmount
    }
  })

  return NextResponse.json(upsertBudget)
}
