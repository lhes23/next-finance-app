"use client"
import { setIsButtonLoading } from "@/redux/dashboardSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import Swal from "sweetalert2"
import LoadingButton from "./LoadingButton"

const LoginCredentialsForm = () => {
  const { push } = useRouter()

  const dispatch = useAppDispatch()
  const isButtonLoading = useAppSelector(
    (state) => state.dashboardSliceReducer.isButtonLoading
  )
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const loginFormHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setIsButtonLoading(true))
    const signInResponse = await signIn("credentials", {
      email,
      password,
      redirect: false
    })
    dispatch(setIsButtonLoading(false))
    if (signInResponse && !signInResponse?.error) {
      push("/dashboard")
    } else {
      Swal.fire("Wrong Username or Password", "Please try again", "error")
    }
  }

  return (
    <>
      <form onSubmit={loginFormHandler}>
        <h1 className="mb-4 text-xl font-semibold text-gray-700">Login</h1>
        <label className="block text-sm">
          <span className="text-gray-700">Email</span>
          <input
            className="p-2 block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input"
            placeholder="Jane Doe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700">Password</span>
          <input
            className="p-2 block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input"
            placeholder="*************"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!isButtonLoading ? (
          <button
            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple hover:shadow-lg"
            type="submit"
          >
            Log in
          </button>
        ) : (
          <LoadingButton />
        )}
      </form>
    </>
  )
}

export default LoginCredentialsForm
