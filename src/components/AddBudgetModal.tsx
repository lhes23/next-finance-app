"use client"
import React from "react"
import ButtonComp from "./ButtonComp"
import AddBudgetForm from "./AddBudgetForm"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { setShowModal } from "@/redux/dashboardSlice"

const AddBudgetModal = () => {
  const showModal = useAppSelector((state) => state.dashboardSlice.showModal)
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

        {showModal && (
          <>
            <div className="justify-center mx-6 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-black">
                      Add a Budget
                    </h3>
                    <button className="p-1 ml-auto border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                      <AiOutlineCloseCircle
                        className="text-red-500"
                        onClick={() => dispatch(setShowModal(false))}
                      />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <AddBudgetForm>
                      <div className="flex justify-center items-center">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => dispatch(setShowModal(false))}
                        >
                          Close
                        </button>
                        <button type="submit">
                          <ButtonComp>Add Budget</ButtonComp>
                        </button>
                      </div>
                    </AddBudgetForm>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </div>
    </>
  )
}

export default AddBudgetModal
