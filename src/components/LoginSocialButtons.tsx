"use client"
import { signIn } from "next-auth/react"
import React from "react"
import { AiFillGoogleCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const LoginSocialButtons = ({ signInName }: { signInName: string }) => {
  const styles = {
    socialBtns:
      "flex items-center justify-center w-full px-4 py-2 my-2 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray hover:shadow-lg hover:bg-white"
  }
  return (
    <>
      <button className={styles.socialBtns} onClick={() => signIn(signInName)}>
        {signInName === "facebook" ? <BsFacebook /> : ""}
        {signInName === "google" ? <AiFillGoogleCircle /> : ""}
        <span className="px-4">{signInName.toUpperCase()}</span>
      </button>
    </>
  )
}

export default LoginSocialButtons
