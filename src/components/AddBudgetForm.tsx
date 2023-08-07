"use client"
import React, { useState } from "react"
import ButtonComp from "./ButtonComp"

const AddBudgetForm = () => {
  const [budgetName, setBudgetName] = useState<string>("")
  const [budgetType, setBudgetType] = useState<string>("expense")
  const [budgetAmount, setBudgetAmount] = useState<string>("")

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      budgetDate: new Date().toLocaleString(),
      budgetName,
      budgetType,
      budgetAmount
    })

    setBudgetName("")
    setBudgetType("expense")
    setBudgetAmount("")
  }
  return (
    <>
      <form className="w-full max-w-md shadow-lg p-10" onSubmit={formHandler}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0"
              htmlFor="inline-full-name"
            >
              Budget Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              defaultValue=""
              value={budgetName}
              onChange={(e) => setBudgetName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Budget Type
            </label>
          </div>
          <div className="md:w-2/3 flex justify-evenly">
            <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
              <input
                type="radio"
                className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                name="budgetType"
                value="income"
                checked={budgetType === "income"}
                onChange={() => setBudgetType("income")}
              />
              <span className="ml-2">Income</span>
            </label>
            <label className="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
              <input
                type="radio"
                className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                name="budgetType"
                defaultValue="expense"
                checked={budgetType === "expense"}
                onChange={() => setBudgetType("expense")}
              />
              <span className="ml-2">Expense</span>
            </label>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Budget Amount
            </label>
          </div>
          <div className="md:w-2/3 flex justify-evenly">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              defaultValue=""
              value={budgetAmount}
              onChange={(e) => setBudgetAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button type="submit">
            <ButtonComp>Add Budget</ButtonComp>
          </button>
        </div>
      </form>
    </>
  )
}

export default AddBudgetForm
