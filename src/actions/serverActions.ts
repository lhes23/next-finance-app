"use server"

import { baseUrl } from "@/lib/baseUrl"
import { months } from "@/lib/months"
import { revalidateTag } from "next/cache"

export const addBudgetHandler = async (e: FormData) => {
  const amnt = e.get("budgetAmount")?.toString()
  const amountTotal = amnt?.startsWith("=")
    ? amnt
        ?.split("=")[1]
        .toString()
        .split("+")
        .map((amn) => parseInt(amn))
        .reduce((a, c) => a + c)
    : amnt

  const data = {
    budgetName: e.get("budgetName")?.toString(),
    budgetType: e.get("budgetType")?.toString(),
    budgetAmount: amountTotal?.toString()
  }

  const res = await fetch(`${baseUrl}/api/budgets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) throw new Error()

  const dataRes = await res.json()
  const year = new Date(dataRes.createdAt).getFullYear()
  const month = months[new Date(dataRes.createdAt).getMonth()]

  const response = await fetch(`${baseUrl}/api/budgets/yearly`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      year,
      month,
      budgetAmount: dataRes.budgetAmount,
      budgetType: dataRes.budgetType
    })
  })

  if (!response.ok) throw new Error()

  revalidateTag("budgets")
  revalidateTag("yearly")
}

export const deleteBudget = async (id: string) => {
  const res = await fetch(`${baseUrl}/api/budgets/${id}`, {
    method: "DELETE"
  })
  if (!res.ok) return
  revalidateTag("budgets")
}
