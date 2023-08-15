import { baseUrl } from "./baseUrl"

export const fetchData = async () => {
  const res = await fetch(`${baseUrl}/api/budgets`, {
    cache: "no-store",
    next: {
      tags: ["budgets"]
    }
  })
  const data = await res.json()
  return data
}

export const fetchDataYearly = async () => {
  const res = await fetch(`${baseUrl}/api/budgets/yearly`, {
    cache: "no-store",
    next: {
      tags: ["yearly"]
    }
  })
  const data = await res.json()
  return data
}
