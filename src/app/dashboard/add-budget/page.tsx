import AddBudgetForm from "@/components/AddBudgetForm"
import React from "react"

const AddBudgetPage = () => {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Add a Budget
      </h2>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 flex justify-center items-center">
        <AddBudgetForm />
      </div>
    </>
  )
}

export default AddBudgetPage
