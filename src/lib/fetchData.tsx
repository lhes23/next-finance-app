"use client"
import { baseUrl } from "./baseUrl"
import { ISingleBudget } from "./interfaces"
import { months } from "./months"

// export const fetchData = async () => {
//   const res = await fetch(`${baseUrl}/api/budgets`, {
//     cache: "no-store",
//     next: {
//       tags: ["budgets"]
//     }
//   })
//   const data = await res.json()
//   return data
// }

// export const fetchDataYearly = async () => {
//   const res = await fetch(`${baseUrl}/api/budgets/yearly`, {
//     cache: "no-store",
//     next: {
//       tags: ["yearly"]
//     }
//   })
//   const data = await res.json()
//   return data
// }

export const addBudgetRequest = async (singleBudget: ISingleBudget) => {
  const res = await fetch(`/api/budgets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(singleBudget)
  })
  if (!res.ok) throw new Error()

  const dataRes = await res.json()
  const year = new Date(dataRes.createdAt).getFullYear()
  const month = months[new Date(dataRes.createdAt).getMonth()]

  const response = await fetch(`/api/budgets/yearly`, {
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
  return response
}

export const editBudgetRequest = async (singleBudget: ISingleBudget) => {
  const res = await fetch(`/api/budgets/${singleBudget.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(singleBudget)
  })
  return res
}
