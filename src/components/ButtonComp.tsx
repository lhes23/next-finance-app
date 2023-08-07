import React from "react"

const ButtonComp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
      {children}
    </div>
  )
}

export default ButtonComp
