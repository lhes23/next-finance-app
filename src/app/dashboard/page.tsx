import MainContent from "@/components/MainContent"
import { baseUrl } from "@/lib/baseUrl"
import React from "react"

const fetchData = async () => {
  const res = await fetch(`${baseUrl}/api/budgets`, {
    cache: "no-store",
    next: {
      tags: ["budgets"]
    }
  })
  const data = await res.json()
  return data
}

const DashboardPage = async () => {
  const incomesExpenses = await fetchData()
  return (
    <>
      <MainContent incomesExpenses={incomesExpenses} />
    </>
  )
}

export default DashboardPage
