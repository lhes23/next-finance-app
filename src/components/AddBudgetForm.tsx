"use client"
import React from "react"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { setIsButtonLoading, setShowModal } from "@/redux/dashboardSlice"
import Swal from "sweetalert2"
import { setSingleBudget } from "@/redux/budgetSlice"
import { addBudget, editBudget } from "@/actions/serverActions"

const AddBudgetForm = ({ children }: { children?: React.ReactNode }) => {
  const dispatch = useAppDispatch()
  const singleBudget = useAppSelector(
    (state) => state.budgetSliceReducer.singleBudget
  )

  const submitFormHandler = async (formData: FormData) => {
    dispatch(setIsButtonLoading(true))
    const response =
      singleBudget.id !== ""
        ? await editBudget(singleBudget.id, singleBudget)
        : await addBudget(singleBudget)
    // if (singleBudget.id !== "") {
    //   response = await editBudget(singleBudget.id, singleBudget)
    // } else {
    //   response = await addBudget(singleBudget)
    // }
    dispatch(setIsButtonLoading(false))
    if (!response) console.log({ response })

    Swal.fire("Budget Saved", "You've added a budget for this month", "success")

    // dispatch(getAllBudgets())
    // dispatch(getAllYearlyBudgets())
    dispatch(setShowModal(false))
    dispatch(
      setSingleBudget({
        id: "",
        budgetName: "",
        budgetType: "expense",
        budgetAmount: ""
      })
    )
  }

  return (
    <>
      <form className="w-full max-w-md p-2" action={submitFormHandler}>
        <div className="mb-6">
          <div className="">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0"
              htmlFor="inline-full-name"
            >
              Budget Name
            </label>
          </div>
          <div className="">
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
        <div className="mb-6">
          <div className="">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Budget Type
            </label>
          </div>
          <div className="flex justify-evenly">
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

        <div className="mb-6">
          <div className="">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Budget Amount
            </label>
          </div>
          <div className="flex justify-evenly">
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
