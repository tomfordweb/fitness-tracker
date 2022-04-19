import { CalculatorLink } from "./interface";
/**
 * TODO: this should be done differently...
 */

export const NUTRITION_CALCULATORS = [
  {
    href: "/bmr-and-tdee-calculator",
    linkText: "BMR & TDEE Calculator",
  },
];

export const STRENGTH_CALCULATORS = [
  {
    href: "/one-rep-max-calculator",
    linkText: "1RM Calculator",
  },
];

export const BODYFAT_CALCULATORS: CalculatorLink[] = [
  {
    href: "/jackson-pollock-3-point",
    linkText: "3 Point Bodyfat Calculator",
  },
  {
    href: "/jackson-pollock-4-point",
    linkText: "4 Point Bodyfat Calculator",
  },
  {
    href: "/jackson-pollock-7-point",
    linkText: "7 Point Bodyfat Calculator",
  },
  {
    href: "/us-navy-girth",
    linkText: "Navy Bodyfat Calculator",
  },
];
export const CALCULATORS: {
  title: string;
  description: string;
  href: string;
  calculators: {
    href: string;
    linkText: string;
  }[];
}[] = [
  {
    title: "Bodyfat Calculators",
    description:
      "Determine your body fat percentage using a variety of easy to use calculators!",
    href: "",
    calculators: BODYFAT_CALCULATORS,
  },
  {
    title: "Nutrition",
    description: "What goes in must come out",
    href: "",
    calculators: NUTRITION_CALCULATORS,
  },
  {
    title: "Strength Calculators",
    description: "Do you even lift bro?",
    href: "",
    calculators: STRENGTH_CALCULATORS,
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
