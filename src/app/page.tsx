import { authOptions } from "@/lib/authOptions"
import Login from "../components/Login"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) return redirect("/dashboard")
  return (
    <main className="flex items-center min-h-screen p-6 bg-[url('/imgs/bg-mountains.jpg')] bg-no-repeat bg-cover bg-local md:bg-fixed">
      <Login />
    </main>
  )
}
