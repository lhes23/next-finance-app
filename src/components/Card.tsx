import React from "react"

const Card = ({
  name,
  amount,
  icon
}: {
  name: string
  amount: number | string
  icon: React.ReactNode
}) => {
  let amountColor
  let iconBgColor

  switch (name) {
    case "Incomes":
      iconBgColor = "bg-green-500"
      break
    case "Expenses":
      iconBgColor = "bg-red-500"
      break
    case "Cashflow":
      if (Number(amount) > 0) {
        amountColor = "text-green-800"
      }
    default:
      iconBgColor = "bg-blue-500"
  }
  return (
    <>
      <div className="backdrop-blur-lg bg-white/50 flex items-center p-4 border rounded-lg hover:shadow-lg text-black hover:scale-105">
        <div className={`p-3 mr-4 ${iconBgColor} rounded-full text-white`}>
          {icon}
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">{name}</p>
          <p className={`text-lg font-semibold ${amountColor}`}>₱ {amount}</p>
        </div>
      </div>
    </>
  )
}

export default Card
