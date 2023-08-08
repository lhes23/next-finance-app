import React from "react"
import ButtonComp from "./ButtonComp"

const ButtonSubmit = () => {
  return (
    <div className="flex justify-center items-center">
      <button type="submit">
        <ButtonComp>Add Budget</ButtonComp>
      </button>
    </div>
  )
}

export default ButtonSubmit
