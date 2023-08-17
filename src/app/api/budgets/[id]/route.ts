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
  const budget = await prisma.budget.update({
    where: { id },
    data: {
      budgetName: data.budgetName,
      budgetType: data.budgetType,
      budgetAmount: data.budgetAmount
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
