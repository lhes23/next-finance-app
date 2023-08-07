import { NextResponse } from "next/server"
import { prisma } from "@/app/api/prismaInit"

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

export const DELETE = async (req: Request, { params }: IParams) => {
  const { id } = params
  const budget = await prisma.budget.delete({
    where: {
      id
    }
  })

  return NextResponse.json(budget)
}
