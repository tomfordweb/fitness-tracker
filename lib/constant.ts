import { calculateJacksonPollock7Point } from "./calculators";

export const BODYFAT_CALCULATORS = [
  {
    href: "/bodyfat-calculator/jackson-pollock-3-point",
    linkText: "Jackson & Pollock 3 Point Bodyfat Calculator",
  },
  {
    href: "",
    linkText: "Jackson & Pollock 4 Point Bodyfat Calculator",
  },
  {
    href: "/bodyfat-calculator/jackson-pollock-7-point",
    linkText: "Jackson & Pollock 7 Point Bodyfat Calculator",
    calculator: calculateJacksonPollock7Point,
  },
  {
    href: "/bodyfat-calculator/us-navy-girth",
    linkText: "US Navy",
  },
  {
    href: "",
    linkText: "Waist-to-Hip ratio",
  },
];
export const CALCULATORS: {
  category: string;
  groups: {
    title: string;
    description: string;
    linkText: string;
    href: string;

    calculators: {
      href: string;
      linkText: string;
    }[];
  }[];
}[] = [
  {
    category: "Diet and Nutrition",
    groups: [
      {
        title: "Bodyfat Calculators",
        description:
          "Determine your body fat percentage using a variety of easy to use calculators!",
        href: "/bodyfat-calculator",
        linkText: "Calculate Bodyfat Percentage",
        calculators: BODYFAT_CALCULATORS,
      },
      {
        title: "TDEE and BMR Calculators",
        description: "Determine the calories needed to power your body",
        href: "",
        linkText: "",
        calculators: [
          {
            href: "",
            linkText: "Calculate BMR Now",
          },
        ],
      },
    ],
  },
  {
    category: "Strength",
    groups: [
      {
        title: "Strength Calculators",
        description: "Do you even lift bro?",
        href: "",
        linkText: "Calculate your fitness level",
        calculators: [
          {
            href: "/strength-calculators/one-rep-max-calculator",
            linkText: "One Rep Max Calculator",
          },
        ],
      },
    ],
  },
];
export const jacksonPollock7 = {
  female: {
    one: 0.00046971,
    two: 0.00000056,
    three: 0.00012828,
    number: 1.097,
  },
  male: {
    one: 0.00043499,
    two: 0.00000055,
    three: 0.00028826,
    number: 1.112,
  },
};
