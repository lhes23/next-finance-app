"use client"
import React, { useState } from "react"
import ButtonComp from "./ButtonComp"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { deleteBudget } from "@/actions/serverActions"

const ConfirmDeleteModal = ({
  children,
  id
}: {
  children: React.ReactNode
  id: string
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => setShowDeleteModal(true)}
          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
        >
          {children}
        </button>

        {showDeleteModal && (
          <>
            <div className="justify-center mx-6 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none dark:text-gray-800 ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold text-purple-600">
                      Delete a Budget
                    </h3>
                    <button className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                      <AiOutlineCloseCircle
                        className="text-red-500"
                        onClick={() => setShowDeleteModal(false)}
                      />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold">
                        Are you sure you want to delete this?
                      </h2>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowDeleteModal(false)}
                      >
                        Close
                      </button>
                      <ButtonComp>
                        <button
                          type="submit"
                          onClick={() =>
                            setTimeout(() => deleteBudget(id), 1000)
                          }
                        >
                          Confirm Delete
                        </button>
                      </ButtonComp>
                    </div>
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
    </div>
  )
}

export default ConfirmDeleteModal
