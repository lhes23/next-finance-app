"use client"
import "./globals.css"
import type { Metadata } from "next"
import { Provider } from "react-redux"
import { store } from "@/redux/store"
import Head from "next/head"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Budget Finance App</title>
      </Head>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
