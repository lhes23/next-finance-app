"use client"
import { setIsButtonLoading } from "@/redux/dashboardSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiFillGoogleCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import LoadingButton from "./LoadingButton"

const Login = () => {
  const isButtonLoading = useAppSelector(
    (state) => state.dashboardSlice.isButtonLoading
  )
  const dispatch = useAppDispatch()
  const styles = {
    socialBtns:
      "flex items-center justify-center w-full px-4 py-2 my-2 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray hover:shadow-lg hover:bg-white"
  }
  return (
    <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl backdrop-blur-md bg-white/50">
      <div className="flex flex-col overflow-y-auto md:flex-row">
        <div className="relative h-auto md:w-1/2">
          <Image
            aria-hidden="true"
            className="object-cover w-full h-full"
            src="/imgs/office.jpg"
            alt="Office"
            fill={true}
          />
        </div>
        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Login
            </h1>
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Email</span>
              <input
                className="p-2 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="Jane Doe"
              />
            </label>
            <label className="block mt-4 text-sm">
              <span className="text-gray-700 dark:text-gray-400">Password</span>
              <input
                className="p-2 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="***************"
                type="password"
              />
            </label>
            {/* You should use a button here, as the anchor is only used for the example  */}
            {!isButtonLoading ? (
              <Link
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple hover:shadow-lg"
                href="/dashboard"
                onClick={() => dispatch(setIsButtonLoading(true))}
              >
                Log in
              </Link>
            ) : (
              <LoadingButton />
            )}

            <hr className="my-4" />
            <button className={styles.socialBtns}>
              <BsFacebook />
              <span className="px-4">Facebook</span>
            </button>
            <button className={styles.socialBtns}>
              <AiFillGoogleCircle />
              <span className="px-4">Google</span>
            </button>
            <p className="mt-4">
              <a
                className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                href="./forgot-password.html"
              >
                Forgot your password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
