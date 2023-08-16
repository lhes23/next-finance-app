import React from "react"

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
  const amountColor = () => {
    if (Number(amount) <= 0 && name == "Cashflow")
      return "text-red-500 dark:text-red-500"
    if (Number(amount) > 0 && name == "Cashflow")
      return "text-green-500 dark:text-green-500"
  }
  return (
    <>
      <div className="bg-white flex items-center p-4 border rounded-lg hover:shadow-lg text-gray-600 hover:scale-105">
        <div className={`p-3 mr-4 ${color} rounded-full text-white`}>
          {icon}
        </div>
        <div>
          <p className="mb-2 text-sm font-medium ">{name}</p>
          <p className={`text-lg font-semibold ${amountColor()}`}>₱ {amount}</p>
        </div>
      </div>
    </>
  )
}

export default Card
