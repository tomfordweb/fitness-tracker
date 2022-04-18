import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import validate from "../../../lib/middleware";

const schema = Joi.object({
  weight: Joi.number().required(),
  reps: Joi.number().required(),
});

export interface ApiSimpleCalculatedData {
  title: string;
  value: string;
  formula: string;
  percentages: { percent: number; weight: number }[];
}

const calculatePercentageRange = (value: number) => {
  /**
   * Subtract 5 from 100..10 times
   */
  return Array.from({ length: 10 }, (_, i) => i + 1)
    .map((i) => 100 - i * 5)
    .map((percent) => ({
      percent,
      weight: value * (percent / 100),
    }));
};

const calculateOneRms = (weight: number, reps: number) => [
  {
    title: "Brzycki",
    value: (weight * (36 / (37 - reps))).toFixed(2),
    formula: `${weight} * (36 / ( 37 ${reps}))`,
  },
  {
    title: "O'Conner",
    value: (weight * (1 + 0.025 * reps)).toFixed(2),
    formula: `${weight} * (1. 0.025 + ${reps})`,
  },
  {
    title: "Mayhew",
    value: (
      (100 * weight) /
      (52.2 + 41.9 * Math.pow(Math.E, -0.055 * reps))
    ).toFixed(2),
    formula: `100 * ${weight} / (52.2 + (41.9 * ${Math.E.toFixed(
      2
    )} ^-0.055 * ${reps}))`,
  },
  {
    title: "Lombardi",
    value: (weight * Math.pow(reps, 0.1)).toFixed(2),
    formula: `${weight} * ${reps} ^ 0.1`,
  },
  {
    title: "Lander",
    value: ((100 * weight) / (101.4 - 2.67123 * reps)).toFixed(2),
    formula: `(100 * ${weight}) / (101.4 - 2.67123 * ${reps})`,
  },
  {
    title: "Wathan",
    value: (
      (100 * weight) /
      (46.8 + 53.8 * Math.pow(Math.E, -0.075 * reps))
    ).toFixed(2),
    formula: `(100 * ${weight}) / (46.8 + (53.8 * ${Math.exp(-0.075).toFixed(
      2
    )}* ${reps}))`,
  },
  {
    title: "Epley",
    value: (weight * (1 + 0.0333 * reps)).toFixed(2),
    formula: `${weight} * (1 + 0.0333 * ${reps})`,
  },
];

export default validate(
  { query: schema },
  (req: NextApiRequest, res: NextApiResponse<ApiSimpleCalculatedData[]>) => {
    const weight = parseInt(req.query.weight as string);
    const reps = parseInt(req.query.reps as string);

    let result = calculateOneRms(weight, reps);

    let returnResult: ApiSimpleCalculatedData[] = result.map((result) => {
      return {
        ...result,
        percentages: calculatePercentageRange(parseFloat(result.value || "")),
      };
    });

    res.status(200).json(returnResult);
  }
);
