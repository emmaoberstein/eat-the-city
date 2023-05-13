import { StaticImageData } from "next/image";
import map1 from "@/app/images/crawls/1/map.png";

export type CrawlId = number;

export interface Crawl {
  name: string;
  author: string;
  stops: Stop[];
  overview: string;
  mapImage?: CrawlImage;
}

export interface Stop {
  name: string;
  description: string;
  images?: CrawlImage[];
}

export interface CrawlImage {
  image: StaticImageData;
  alt: string;
  caption?: string;
}

export const crawlData: { [id: CrawlId]: Crawl } = {
  1: {
    name: "Jackson Heights - Around The World",
    author: "Jemma Oberfried",
    overview:
      "Discover the diverse food scene of Jackson Heights on our food crawl. This neighborhood has a variety of tasty international dishes. You can try Indian street food and delicious Latin American treats. The prices are reasonable, and the flavors are fantastic. Join us as we explore the lively streets of Jackson Heights and enjoy delicious food from around the world.",
    mapImage: {
      image: map1,
      alt: "A map",
      caption: "A map",
    },
    stops: [
      {
        name: "Fuskahouse_NYC",
        description:
          "Discover the diverse food scene of Jackson Heights on our food crawl. This neighborhood has a variety of tasty international dishes. You can try Indian street food and delicious Latin American treats. The prices are reasonable, and the flavors are fantastic. Join us as we explore the lively streets of Jackson Heights and enjoy delicious food from around the world.",
        images: [
          {
            image: map1,
            alt: "A map",
            caption: "A map",
          },
          {
            image: map1,
            alt: "A map",
            caption: "A map",
          },
        ],
      },
      {
        name: "Lhasa Fast Food",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
      },
      {
        name: "Arepa Lady",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
      },
      {
        name: "La Nueva Bakery",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
      },
      {
        name: "Mariscos El Submarino",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
      },
      {
        name: "Louie's",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
      },
      {
        name: "Nepali Bhanchha Ghar",
        description:
          "Triple Deck Diner is a classic American diner located in the heart of downtown. As the name suggests, the diner is famous for its triple-decker sandwiches, piled high with layers of fresh ingredients. A must-try is their signature Triple Decker Club, with roasted turkey, crispy bacon, lettuce, and tomato, served on your choice of bread with a side of fries. In addition to sandwiches, Triple Deck Diner also serves up classic diner fare like burgers, hot dogs, and milkshakes. Don't forget to save room for dessert - their homemade pies are legendary! Triple Deck Diner is a quintessential American diner experience that's not to be missed on your food crawl through downtown.",
      },
    ],
  },
};
