import Login from "../components/Login"

export default async function Home() {
  return (
    <main className="flex items-center min-h-screen p-6 bg-[url('/imgs/bg-mountains.jpg')] bg-no-repeat bg-cover bg-local md:bg-fixed">
      <Login />
    </main>
  )
}
