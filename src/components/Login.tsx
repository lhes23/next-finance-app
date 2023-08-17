"use client"
import { setIsButtonLoading } from "@/redux/dashboardSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiFillGoogleCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

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
              <button
                disabled={true}
                type="button"
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple hover:shadow-lg"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  ></path>
                </svg>
                Loading...
              </button>
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
