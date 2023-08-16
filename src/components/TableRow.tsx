"use client"
import React from "react"
import { IBudget } from "@/lib/interfaces"
import { BsFillTrashFill, BsPencil } from "react-icons/bs"
import Swal from "sweetalert2"
import { useAppDispatch } from "@/redux/store"
import { setShowModal } from "@/redux/dashboardSlice"
import { getAllBudgets } from "@/redux/createAsyncs"

const TableRow = ({ incomeExpenseRow }: { incomeExpenseRow: IBudget }) => {
  const dispatch = useAppDispatch()
  const col =
    incomeExpenseRow.budgetType === "income"
      ? "text-green-700 bg-green-100"
      : "text-red-700 bg-red-100"

  const d =
    incomeExpenseRow?.updatedAt !== undefined
      ? new Date(Date.parse(incomeExpenseRow.updatedAt)).toString().split(" ")
      : ""

  const deleteHandler = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/api/budgets/${id}`, {
          method: "DELETE"
        }).then(() => {
          dispatch(getAllBudgets())
          Swal.fire("Deleted!", "Your budget has been deleted.", "success")
        })
      }
    })
  }
  return (
    <tr className="text-gray-600">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold">{`${d[1]} ${d[2]}`}</p>
            <p className="text-xs">{d[0]}</p>
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
            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
            aria-label="Edit"
            onClick={() => dispatch(setShowModal(true))}
          >
            <BsPencil />
          </button>
          <button
            onClick={() => deleteHandler(incomeExpenseRow.id)}
            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
          >
            <BsFillTrashFill />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TableRow
