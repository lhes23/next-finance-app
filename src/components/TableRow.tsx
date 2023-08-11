import { IBudget } from "@/lib/interfaces"
import React from "react"
import { BsFillTrashFill, BsPencil } from "react-icons/bs"
import ConfirmDeleteModal from "./ConfirmDeleteModal"

const TableRow = ({ incomeExpenseRow }: { incomeExpenseRow: IBudget }) => {
  const col =
    incomeExpenseRow.budgetType === "income"
      ? "text-green-700 bg-green-100"
      : "text-red-700 bg-red-100"

  const d =
    incomeExpenseRow?.updatedAt !== undefined
      ? new Date(Date.parse(incomeExpenseRow.updatedAt)).toString().split(" ")
      : ""
  return (
    <tr key={incomeExpenseRow.id} className="">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold">{`${d[1]} ${d[2]}`}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{d[0]}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm">{incomeExpenseRow.budgetName}</td>
      <td className="px-4 py-3 text-xs">₱ {incomeExpenseRow.budgetAmount}</td>
      <td className="px-4 py-3 text-sm">
        <span
          className={`px-2 py-1 font-semibold leading-tight rounded-full ${col}`}
        >
          {incomeExpenseRow.budgetType}
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-4 text-sm">
          <button
            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Edit"
          >
            <BsPencil />
          </button>

          <ConfirmDeleteModal id={incomeExpenseRow.id}>
            <BsFillTrashFill />
          </ConfirmDeleteModal>
        </div>
      </td>
    </tr>
  )
}

export default TableRow
