import { Inter } from "next/font/google";
import Link from "next/link";
import SearchBar from "./searchbar";

const inter = Inter({ subsets: ["latin"] });

function Sizer({ height = 0, width = 0 }) {
  return <div style={{ height, width }} />;
}

export default function Browse() {
  return (
    <>
      <div
        className={"px-16 py-8 bg-tomato-light min-h-screen " + inter.className}
      >
        <main className="flex flex-col items-center justify-between">
          <Sizer height={32} />
          <SearchBar placeholder={"Search by neighborhood or cuisine"} />
        </main>
      </div>
    </>
  );
}
