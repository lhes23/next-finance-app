import { NextResponse } from "next/server"

let OBJECT_DATA: any = [
  {
    id: "1",
    budgetName: "grocery",
    budgetType: "expense",
    budgetAmount: "1000",
    createdAt: "2023-08-07",
    updatedAt: "2023-08-07"
  },
  {
    id: "2",
    budgetName: "salary",
    budgetType: "income",
    budgetAmount: "81000",
    createdAt: "2023-08-07",
    updatedAt: "2023-08-07"
  }
]

export const GET = async () => {
  return NextResponse.json(OBJECT_DATA)
}

export const POST = async (req: Request) => {
  const body = await req.json()
  OBJECT_DATA.push(body)
  return NextResponse.json(OBJECT_DATA)
}
