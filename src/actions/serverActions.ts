"use server"

import { baseUrl } from "@/lib/baseUrl"
import { revalidateTag } from "next/cache"

export const addBudgetHandler = async (e: FormData) => {
  const data = {
    budgetName: e.get("budgetName")?.toString(),
    budgetType: e.get("budgetType")?.toString(),
    budgetAmount: e.get("budgetAmount")?.toString()
  }

  const res = await fetch(`${baseUrl}/api/budgets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) return

  revalidateTag("budgets")
}

export const deleteBudget = async (id: string) => {
  const res = await fetch(`${baseUrl}/api/budgets/${id}`, {
    method: "DELETE"
  })
  if (!res.ok) return
  revalidateTag("budgets")
}
