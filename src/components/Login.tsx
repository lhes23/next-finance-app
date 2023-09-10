import React from "react"
import Image from "next/image"
import LoginCredentialsForm from "./LoginCredentialsForm"
import LoginSocialButtons from "./LoginSocialButtons"

const Login = () => {
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
            <LoginCredentialsForm />
            <hr className="my-4" />
            <LoginSocialButtons signInName="facebook" />
            <LoginSocialButtons signInName="google" />
            <p className="mt-4">
              <a
                className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                href="#"
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
