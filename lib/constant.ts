import { CalculatorLink } from "./interface";
/**
 * TODO: this should be done differently...
 */
export const BASE_URL = "http://localhost:3000";

export const NUTRITION_CALCULATORS = [
  {
    href: "/nutrition-calculators/basal-metabolic-rate",
    linkText: "Basal Metabolic Rate",
  },
  {
    href: "/nutrition-calculators/total-daily-energy-expenditure",
    linkText: "Total Daily Energy Expenditure",
  },
];

export const STRENGTH_CALCULATORS = [
  {
    href: "/strength-calculators/one-rep-max-calculator",
    linkText: "One Rep Max Calculator",
  },
];

export const BODYFAT_CALCULATORS: CalculatorLink[] = [
  {
    href: "/bodyfat-calculator/jackson-pollock-3-point",
    linkText: "Jackson & Pollock 3 Point Bodyfat Calculator",
  },
  {
    href: "/bodyfat-calculator/jackson-pollock-4-point",
    linkText: "Jackson & Pollock 4 Point Bodyfat Calculator",
  },
  {
    href: "/bodyfat-calculator/jackson-pollock-7-point",
    linkText: "Jackson & Pollock 7 Point Bodyfat Calculator",
  },
  {
    href: "/bodyfat-calculator/us-navy-girth",
    linkText: "US Navy",
  },
];
export const CALCULATORS: {
  category: string;
  groups: {
    title: string;
    description: string;
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
        calculators: BODYFAT_CALCULATORS,
      },
      {
        title: "Nutrition",
        description: "What goes in must come out",
        href: "/nutrition-calculators",
        calculators: NUTRITION_CALCULATORS,
      },
    ],
  },
  {
    category: "Strength",
    groups: [
      {
        title: "Strength Calculators",
        description: "Do you even lift bro?",
        href: "/strength-calculators",
        calculators: STRENGTH_CALCULATORS,
      },
    ],
  },
];

export const TDEE_ACTIVITY_LEVELS = [
  {
    multiplier: 1.2,
    label: "Sedentary - little to no exercise, desk job.",
  },

  {
    multiplier: 1.375,
    label: "Lightly Active - Light exercise / sports 1-3 days per week.",
  },
  {
    multiplier: 1.55,
    label: "Moderately Active - Moderate Exercise / sports 6-7 days per week.",
  },
  {
    multiplier: 1.725,
    label: "Very Active - Hard Exercise daily, moderate exercise twice a day",
  },
  {
    multiplier: 1.9,
    label: "Extra Active - Hard exercise 2 or more times a day.",
  },
];
