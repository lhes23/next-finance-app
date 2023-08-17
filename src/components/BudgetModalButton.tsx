"use client"
import React from "react"
import ButtonComp from "./ButtonComp"
import { useAppDispatch } from "@/redux/store"
import { setShowModal } from "@/redux/dashboardSlice"

const BudgetModalButton = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div>
        <ButtonComp>
          <button
            type="button"
            onClick={() => dispatch(setShowModal(true))}
            className="text-sm md:text-base"
          >
            Add Budget
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </button>
        </ButtonComp>
      </div>
    </>
  )
}

export default BudgetModalButton
