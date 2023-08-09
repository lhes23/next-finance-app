import React from "react"
import { IconType } from "react-icons"

const Card = ({
  name,
  amount,
  icon,
  color
}: {
  name: string
  amount: number | string
  icon: React.ReactNode
  color: string
}) => {
  const amountColor =
    Number(amount) <= 0
      ? "text-red-500 dark:text-red-200"
      : "text-green-500 dark:text-green-200"
  return (
    <>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className={`p-3 mr-4 ${color} rounded-full text-white`}>
          {icon}
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {name}
          </p>
          <p className={`text-lg font-semibold ${amountColor}`}>₱ {amount}</p>
        </div>
      </div>
    </>
  )
}

export default Card
