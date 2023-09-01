import { NextResponse } from "next/server"
import { prisma } from "@/prisma/prismaInit"

interface IParams {
  params: {
    id: string
  }
}

export const GET = async (req: Request, { params }: IParams) => {
  const { id } = params
  const budget = await prisma.budget.findUnique({ where: { id } })
  return NextResponse.json(budget)
}

export const PUT = async (req: Request, { params }: IParams) => {
  const { id } = params
  const data = await req.json()
  let budgAmt = data.budgetAmount
  if (budgAmt.includes("+")) {
    budgAmt = data.budgetAmount
      .split("+")
      .map((c: string) => Number(c))
      .reduce((a: number, c: number) => a + c)
      .toString()
  }
  const budget = await prisma.budget.update({
    where: { id },
    data: {
      budgetName: data.budgetName,
      budgetType: data.budgetType,
      budgetAmount: budgAmt
    }
  })
  return NextResponse.json(budget)
}

export const DELETE = async (req: Request, { params }: IParams) => {
  const { id } = params
  const budget = await prisma.budget.delete({
    where: {
      id
    }
  })

  return NextResponse.json(budget)
}
