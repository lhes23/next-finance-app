import LoadingComponent from "@/components/LoadingComponent"

export default function Loading() {
  return (
    // <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
    <div className="flex justify-center text-center mt-10">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-purple-500 border-8 h-52 w-52"></div>
    </div>
  )
}
