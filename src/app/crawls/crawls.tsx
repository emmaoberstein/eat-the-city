import { StaticImageData } from "next/image";
import map1 from "@/app/images/crawls/1/map.png";
import fuskahouse from "@/app/images/crawls/1/fuskahouse.jpg";
import fuskahouse_cart from "@/app/images/crawls/1/fuskahouse_cart.jpg";
import lhasa from "@/app/images/crawls/1/lhasa.jpg";
import arepa from "@/app/images/crawls/1/arepa.jpg";
import lanueva from "@/app/images/crawls/1/lanueva.jpg";
import mariscos from "@/app/images/crawls/1/mariscos.jpg";
import louies from "@/app/images/crawls/1/louies.jpg";
import nepali from "@/app/images/crawls/1/nepali.jpg";

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
      "For our first 'Eat the City' food crawl, we went to Jackson Heights in Queens, one of the most culturally diverse neighborhoods in New York. The food scene here reflects that diversity, with plenty of reasonably priced and delicious options for South Asian, Southeast Asian, South American, and Mexican dishes within less than a mile from each other! ",
      mapImage: {
      image: map1,
      alt: "A map of our food crawl",
      caption: "A map of our food crawl",
    },
    stops: [
      {
        name: "Fuskahouse_NYC",
        description:  "The first stop on our crawl, Fuskahouse_NYC is a food cart that speicalizes in Bangladeshi street food. Fuska (also spelled fuchka or phuchka) are deep-fried potato balls seasoned with aromatic spices, offering a satisfying crispy outside and a creamy inside. Topped with tangy tamarind sauce, onions, potato, and shredded boiled eggs, each bite is packed with flavor.",
        images: [
          {
            image: fuskahouse_cart,
            alt: "The Fuska house cart",
            caption: "The Fuska house cart",
          },
          {
            image: fuskahouse,
            alt: "Fuska",
            caption: "Fuska dish",
          },
        ],
      },
      {
        name: "Lhasa Fast Food",
        description:
          "Next, we headed to Lhasa Fast Food ",
          images: [
          {
            image: lhasa,
            alt: "Lhasa Fast Food"
          }
        ]
        },
      {
        name: "Arepa Lady",
        description:
          "",
          images: [
            {
              image: arepa,
              alt: "Arepa"
            }
          ]
      },
      {
        name: "La Nueva Bakery",
        description:
          "",
          images: [
            {
              image: lanueva,
              alt: "La Nueva"
            }
          ]
        },
      {
        name: "Mariscos El Submarino",
        description:
          "",
          images: [
            {
              image: mariscos,
              alt: "La Nueva"
            }
          ]
        },
      {
        name: "Louie's",
        description:
          "",
          images: [
            {
              image: louies,
              alt: "La Nueva"
            }
          ]
        },
      {
        name: "Nepali Bhanchha Ghar",
        description:
          "",
          images: [
            {
              image: nepali,
              alt: "La Nueva"
            }
          ]
        },
    ],
  },
};
