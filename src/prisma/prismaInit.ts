import { PrismaClient } from "@prisma/client"
export const prisma = new PrismaClient()

export const getAllIncomes = async () => {
  const incomes = await prisma.budget.findMany({
    where: {
      budgetType: "income"
    }
  })
  return incomes
}
