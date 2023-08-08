import { getAllIncomes } from "@/prisma/prismaInit"
import { NextResponse } from "next/server"

export const GET = async () => {
  const allIncomes = await getAllIncomes()
  return NextResponse.json(allIncomes)
}
