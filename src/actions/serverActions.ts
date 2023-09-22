"use server"

import { baseUrl } from "@/lib/baseUrl"
import { ISingleBudget } from "@/lib/interfaces"
import { months } from "@/lib/months"
import { prisma } from "@/prisma/prismaInit"
import { revalidatePath, revalidateTag } from "next/cache"

// export const addBudgetHandler = async (e: FormData) => {
// export const addBudgetHandler = async ({
//   budgetName,
//   budgetType,
//   budgetAmount
// }: {
//   budgetName: string
//   budgetType: string
//   budgetAmount: string
// }) => {
//   // const amnt = e.get("budgetAmount")?.toString()
//   const amountTotal = budgetAmount?.startsWith("=")
//     ? budgetAmount
//         ?.split("=")[1]
//         .toString()
//         .split("+")
//         .map((amn) => parseInt(amn))
//         .reduce((a, c) => a + c)
//     : budgetAmount

//   const data = {
//     budgetName,
//     budgetType,
//     budgetAmount: amountTotal?.toString()
//   }

//   const res = await fetch(`${baseUrl}/api/budgets`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })

//   if (!res.ok) throw new Error()

//   const dataRes = await res.json()
//   const year = new Date(dataRes.createdAt).getFullYear()
//   const month = months[new Date(dataRes.createdAt).getMonth()]

//   const response = await fetch(`${baseUrl}/api/budgets/yearly`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//       year,
//       month,
//       budgetAmount: dataRes.budgetAmount,
//       budgetType: dataRes.budgetType
//     })
//   })

//   if (!response.ok) console.log({ response })

//   revalidateTag("budgets")
//   revalidateTag("yearly")
// }

export const deleteBudget = async (id: string) => {
  const res = await fetch(`${baseUrl}/api/budgets/${id}`, {
    method: "DELETE"
  })
  if (!res.ok) return
  revalidateTag("budgets")
}

// DashboardCards, IncomeAndExpense, AllBudgetsPage
export const getAllBudgets = async () => {
  const budgets = await prisma.budget.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  return budgets
}

// DashboardCharts
export const getAllYearlyBudgets = async () => {
  const yearlyBudgets = await prisma.yearlyBudget.findMany()
  return yearlyBudgets
}

// AddBudgetForm
export const addBudget = async (singleBudget: ISingleBudget) => {
  let budgAmt = singleBudget.budgetAmount.toString()
  if (budgAmt.includes("+")) {
    budgAmt = budgAmt
      .split("+")
      .map((c: string) => Number(c))
      .reduce((a: number, c: number) => a + c)
      .toString()
  }
  const data = await prisma.budget.create({
    data: {
      budgetName: singleBudget.budgetName,
      budgetType: singleBudget.budgetType,
      budgetAmount: budgAmt
    }
  })

  const year = new Date(data.createdAt).getFullYear()
  const month = months[new Date(data.createdAt).getMonth()]
  const budgetAmount = Number(data.budgetAmount)
  const monthYear = await prisma.yearlyBudget.findFirst({
    where: { year, month }
  })

  let update
  let create

  if (data.budgetType === "income") {
    update = {
      income: monthYear ? monthYear.income + budgetAmount : 0
    }
    create = {
      year,
      month,
      income: budgetAmount
    }
  } else {
    update = {
      expense: monthYear ? monthYear.expense + budgetAmount : 0
    }
    create = {
      year,
      month,
      expense: budgetAmount
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
    create
  })

  revalidatePath("/dashboard")
  return upsertBudget
}

// EditBudgetForm
export const editBudget = async (id: string, singleBudget: ISingleBudget) => {
  let budgAmt = singleBudget.budgetAmount.toString()
  if (budgAmt.includes("+")) {
    budgAmt = budgAmt
      .split("+")
      .map((c: string) => Number(c))
      .reduce((a: number, c: number) => a + c)
      .toString()
  }
  const budget = await prisma.budget.update({
    where: { id },
    data: {
      budgetName: singleBudget.budgetName,
      budgetType: singleBudget.budgetType,
      budgetAmount: budgAmt
    }
  })
  revalidatePath("/dashboard")
  return budget
}
