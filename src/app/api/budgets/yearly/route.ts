import { prisma } from "@/prisma/prismaInit"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  const yearly_budget = await prisma.budget.findMany({
    where: {
      createdAt: {
        gt: new Date("2024"),
        lt: new Date("2025")
      }
    }
  })
  return NextResponse.json(yearly_budget)
}
