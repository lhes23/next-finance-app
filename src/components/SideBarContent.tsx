"use client"
import Link from "next/link"

const SideBarContent = ({
  title,
  sidebarLinks
}: {
  title: string
  sidebarLinks: { name: string; url: string; icon: any }[]
}) => {
  return (
    <div className={`py-4`}>
      <h2 className={`ml-6 text-lg font-bold`}>{title}</h2>

      <ul className={``}>
        {sidebarLinks.map((side, i) => (
          <li
            key={i}
            className={`relative px-6 py-3 hover:shadow-lg hover:text-xl hover:bg-purple-400 `}
          >
            <Link
              className="flex items-center w-full transition-colors duration-150"
              href={side.url}
            >
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>

              {side.icon}
              <span className="ml-4 text-sm font-semibold">{side.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBarContent
