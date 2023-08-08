"use client"
import React from "react"
import ButtonComp from "./ButtonComp"
import { addBudgetHandler } from "@/actions/serverActions"

const AddBudgetForm = () => {
  return (
    <>
      <form
        className="w-full max-w-md shadow-lg p-10"
        action={addBudgetHandler}
      >
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
              name="budgetName"
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
              />
              <span className="ml-2">Income</span>
            </label>
            <label className="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
              <input
                type="radio"
                className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                name="budgetType"
                value="expense"
                checked
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
              name="budgetAmount"
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
