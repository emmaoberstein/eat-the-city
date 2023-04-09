import Image from "next/image"
import { Inter } from "next/font/google"
import squirrel from "./images/main-squirrel.png"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

function Sizer({ height = 0, width = 0 }) {
  return <div style={{ height, width }} />
}

export default function Home() {
  return (
    <>
      <div className={"px-16 py-8 bg-tomato-primary min-h-screen " + inter.className}>
        <h1 className="text-4xl uppercase tracking-wide text-title">Eat The City</h1>
        <Sizer height={64} />
        <main className="flex flex-col items-center justify-between">
          <Image src={squirrel} alt="Cute squirrel" />
          <Sizer height={32} />
          <Link href={"#"} className="text-white text-3xl transition">
            Explore crawls
            <div className="w-full h-1 bg-accent" />
          </Link>
        </main>
      </div>
    </>
  )
}
