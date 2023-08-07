import React from "react"

const Card = ({ name, amount }: { name: string; amount: number | string }) => {
  return (
    <>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {name}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            ₱ {amount}
          </p>
        </div>
      </div>
    </>
  )
}

export default Card
