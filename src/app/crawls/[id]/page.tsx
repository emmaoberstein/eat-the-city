import { Inter } from "next/font/google";
import Image from "next/image";
import { Sizer } from "@/components";
import { Crawl, Stop, crawlData, CrawlImage } from "../crawls";

const inter = Inter({ subsets: ["latin"] });

function Header({ crawl }: { crawl: Crawl }) {
  return (
    <header className="flex flex-col text-center items-center bg-tomato-primary p-4 text-foreground">
      <h1 className="text-4xl">{crawl.name}</h1>
      <Sizer height={8} />
      <div className="text-xl">By {crawl.author}</div>
      <div className="text-xl">2-6 people</div>
    </header>
  );
}
export default function Crawl({ params }: any) {
  const crawl = crawlData[params.id];

  function StopSection({ stop }: { stop: Stop }) {
    return (
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">
          <a id={stop.name}>{stop.name}</a>
        </h1>
        <span>{stop.description}</span>
        {stop.images?.map((crawlImage: CrawlImage, i: number) => {
          return (
            <div key={i} className="py-2">
              <Image
                src={crawlImage.image}
                alt={crawlImage.alt}
                className="object-contain w-3/4 mx-auto overflow-hidden rounded-md"
              />
              {crawlImage.caption && (
                <div className="text-center w-3/4 mx-auto italic text-gray-700 text-sm">
                  {crawlImage.caption}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className={"flex flex-col min-h-screen " + inter.className}>
      <Header crawl={crawl} />
      <main className="flex flex-grow px-6 py-8 bg-tomato-light gap-8">
        <aside className="hidden md:block sticky top-0 p-8 max-h-screen">
          <ul className="flex flex-col gap-2 w-max">
            <li key={0} className="text-[#0D48DE]">
              <a href="#Overview">Overview</a>
            </li>
            {crawl.stops.map((stop, i) => (
              <li key={i + 1} className="text-[#0D48DE]">
                <a href={"#" + stop.name}>{stop.name}</a>
              </li>
            ))}
          </ul>
        </aside>
        <section className="flex flex-col flex-grow bg-white p-4 gap-8 rounded-md">
          <StopSection
            stop={{
              name: "Overview",
              description: crawl.overview,
              images: crawl.mapImage ? [crawl.mapImage] : [],
            }}
          />
          {crawl.stops.map((stop, i) => (
            <StopSection key={i} stop={stop} />
          ))}
        </section>
      </main>
    </div>
  );
}
