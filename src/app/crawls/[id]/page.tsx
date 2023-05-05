import { Inter } from "next/font/google";
import { Sizer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

type CrawlId = number;
interface Crawl {
  name: string;
  author: string;
  stops: Stop[];
  overview: string;
}

interface Stop {
  name: string;
  description: string;
  image: string;
}

const data: { [id: CrawlId]: Crawl } = {
  1: {
    name: "Jackson Heights - Around The World",
    author: "Jemma Oberfried",
    overview:
      "Check out this wonderful tour, you'll love it. Bring all your friends. Awesome.",
    stops: [
      {
        name: "Triple Decker Diner",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
        image: "",
      },
      {
        name: "Two Decker Diner",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
        image: "",
      },
      {
        name: "Single Decker Diner",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
        image: "",
      },
      {
        name: "Welcome End",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
        image: "",
      },
    ],
  },
};

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
  const crawl = data[params.id];
  function StopSection({ stop }: { stop: Stop }) {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-bold text-xl">{stop.name}</span>
        <span>{stop.description}</span>
      </div>
    );
  }
  return (
    <div className={"flex flex-col min-h-screen " + inter.className}>
      <Header crawl={crawl} />
      <main className="flex flex-grow px-6 py-8 bg-tomato-light gap-8">
        <aside className="w-[150px] flex flex-col p-4">
          <ul className="flex flex-col gap-2">
            <li key={0} className="text-[#0D48DE]">
              Overview
            </li>
            {crawl.stops.map((stop, i) => (
              <li key={i + 1} className="text-[#0D48DE]">
                {stop.name}
              </li>
            ))}
          </ul>
        </aside>
        <section className="flex flex-col flex-grow bg-white p-4 gap-8 rounded-md">
          <StopSection
            stop={{ name: "Overview", description: crawl.overview, image: "" }}
          />
          {crawl.stops.map((stop, i) => (
            <StopSection key={i} stop={stop} />
          ))}
        </section>
      </main>
    </div>
  );
}
