import Link from "next/link"

export const Header = () => {
  return (
    <div className="flex gap-5 p-10 fixed z-10">
      <Link scroll={false} href="/">Home</Link>
      <Link scroll={false} href="/about">About</Link>
      <Link scroll={false} href="/projects">Projects</Link>
    </div>
  )
}