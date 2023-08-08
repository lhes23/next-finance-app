import Link from "next/link"
import ButtonComp from "./ButtonComp"

const SideBarContent = ({
  title,
  sidebarLinks
}: {
  title: string
  sidebarLinks: { name: string; url: string; icon: any }[]
}) => {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <h2 className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h2>

      <ul>
        {sidebarLinks.map((side, i) => (
          <li className="relative px-6 py-3" key={i}>
            <span
              className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>

            <Link
              className="inline-flex items-center w-full transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href={side.url}
            >
              {side.icon}
              <span className="ml-4 md:text-lg text-base font-semibold text-purple-600">
                {side.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="px-6 my-6">
        <ButtonComp>
          <Link href="/dashboard/add-budget">
            Add Budget
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </Link>
        </ButtonComp>
      </div>
    </div>
  )
}

export default SideBarContent
