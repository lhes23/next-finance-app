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

  if (!monthYear) throw new Error()

  let upsertBudget

  if (data.budgetType === "income") {
    upsertBudget = await prisma.yearlyBudget.upsert({
      where: {
        YearlyBudgetId: {
          year,
          month
        }
      },
      update: {
        income: monthYear.income + budgetAmount
      },
      create: {
        year,
        month,
        income: monthYear.income + budgetAmount
      }
    })
  } else {
    upsertBudget = await prisma.yearlyBudget.upsert({
      where: {
        YearlyBudgetId: {
          year,
          month
        }
      },
      update: {
        expense: monthYear?.expense + budgetAmount
      },
      create: {
        year,
        month,
        expense: monthYear?.expense + budgetAmount
      }
    })
  }

  return NextResponse.json(upsertBudget)
}
