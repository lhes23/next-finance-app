"use client"
import { IBudget } from "@/lib/interfaces"
import { setFilteredAllBudgets, setSearchQuery } from "@/redux/budgetSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import React, { useEffect } from "react"

const SearchBar = ({ allBudgets }: { allBudgets: IBudget[] }) => {
  const dispatch = useAppDispatch()

  const searchQuery = useAppSelector(
    (state) => state.budgetSliceReducer.searchQuery
  )

  useEffect(() => {
    dispatch(
      setFilteredAllBudgets(
        allBudgets?.filter((budget) => {
          if (
            budget.budgetName
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            budget.budgetType.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return budget
          }
        })
      )
    )
  }, [searchQuery])
  return (
    <>
      <div
        className="relative mb-3 backdrop-blur-lg bg-white/50 rounded-lg"
        data-te-input-wrapper-init
      >
        <input
          type="search"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleSearch2"
          placeholder="Type query"
          name="search"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <label
          htmlFor="exampleSearch2"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
        >
          Search
        </label>
      </div>
    </>
  )
}

export default SearchBar
