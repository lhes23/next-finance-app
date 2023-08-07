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
  return (
    <>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className={`p-3 mr-4 bg-${color}-100 rounded-full`}>{icon}</div>
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
