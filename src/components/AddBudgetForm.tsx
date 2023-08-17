"use client"
import React from "react"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { setShowModal } from "@/redux/dashboardSlice"
import { getAllBudgets, getAllYearlyBudgets } from "@/redux/createAsyncs"
import { months } from "@/lib/months"
import Swal from "sweetalert2"
import { setSingleBudget } from "@/redux/budgetSlice"

const AddBudgetForm = ({ children }: { children?: React.ReactNode }) => {
  const dispatch = useAppDispatch()
  const singleBudget = useAppSelector(
    (state) => state.budgetSliceReducer.singleBudget
  )

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch(`/api/budgets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(singleBudget)
    })
    if (!res.ok) throw new Error()

    const dataRes = await res.json()
    const year = new Date(dataRes.createdAt).getFullYear()
    const month = months[new Date(dataRes.createdAt).getMonth()]

    const response = await fetch(`/api/budgets/yearly`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        year,
        month,
        budgetAmount: dataRes.budgetAmount,
        budgetType: dataRes.budgetType
      })
    })

    if (!response.ok) console.log({ response })

    Swal.fire("Budget Saved", "You've added a budget for this month", "success")

    dispatch(getAllBudgets())
    dispatch(getAllYearlyBudgets())
    dispatch(setShowModal(false))
    dispatch(
      setSingleBudget({
        budgetName: "",
        budgetType: "expense",
        budgetAmount: ""
      })
    )
  }

  return (
    <>
      {/* <form className="w-full max-w-md p-2" action={addBudgetHandler}> */}
      <form className="w-full max-w-md p-2" onSubmit={submitFormHandler}>
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
              value={singleBudget.budgetName}
              onChange={(e) =>
                dispatch(
                  setSingleBudget({
                    ...singleBudget,
                    budgetName: e.target.value
                  })
                )
              }
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
                onChange={(e) =>
                  dispatch(
                    setSingleBudget({
                      ...singleBudget,
                      budgetType: e.target.value
                    })
                  )
                }
              />
              <span className="ml-2">Income</span>
            </label>
            <label className="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
              <input
                type="radio"
                className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                name="budgetType"
                value="expense"
                defaultChecked
                onChange={(e) =>
                  dispatch(
                    setSingleBudget({
                      ...singleBudget,
                      budgetType: e.target.value
                    })
                  )
                }
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
              value={singleBudget.budgetAmount}
              onChange={(e) =>
                dispatch(
                  setSingleBudget({
                    ...singleBudget,
                    budgetAmount: e.target.value
                  })
                )
              }
            />
          </div>
        </div>
        {children}
      </form>
    </>
  )
}

export default AddBudgetForm
