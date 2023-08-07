import MainContent from "@/components/MainContent"
import React from "react"

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/budgets")
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
