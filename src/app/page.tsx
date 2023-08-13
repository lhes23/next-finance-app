import Login from "../components/Login"

export default async function Home() {
  return (
    <main className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <Login />
    </main>
  )
}
