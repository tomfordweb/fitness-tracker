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
}
export default validate(
  { query: schema },
  (
    req: NextApiRequest,
    res: NextApiResponse<{
      brzycki: ApiSimpleCalculatedData;
      oconner: ApiSimpleCalculatedData;
      mayhew: ApiSimpleCalculatedData;
      lombardi: ApiSimpleCalculatedData;
      lander: ApiSimpleCalculatedData;
      wathan: ApiSimpleCalculatedData;
      epley: ApiSimpleCalculatedData;
    }>
  ) => {
    const weight = parseInt(req.query.weight as string);
    const reps = parseInt(req.query.reps as string);

    res.status(200).json({
      brzycki: {
        title: "Brzycki",
        value: (weight * (36 / (37 - reps))).toFixed(2),
        formula: `${weight} * (36 / ( 37 ${reps}))`,
      },
      oconner: {
        title: "O'Conner",
        value: (weight * (1 + 0.025 * reps)).toFixed(2),
        formula: `${weight} * (1. 0.025 + ${reps})`,
      },
      mayhew: {
        title: "Mayhew",
        value: (
          (100 * weight) /
          (52.2 + 41.9 * (Math.E - 0.055) * reps)
        ).toFixed(2),
        formula: `100 * ${weight} / (52.2 + (41.9 * ${(Math.E - 0.055).toFixed(
          2
        )} * ${reps}))`,
      },
      lombardi: {
        title: "Lombardi",
        value: Math.pow(weight * reps, 0.1).toFixed(2),
        formula: `${weight} * ${reps} ^ 0.1`,
      },
      lander: {
        title: "Lander",
        value: ((100 * weight) / (101.4 - 2.67123 * reps)).toFixed(2),
        formula: `(100 * ${weight}) / (101.4 - 2.67123 * ${reps})`,
      },
      wathan: {
        title: "Wathan",
        value: (
          (100 * weight) /
          (46.8 + 53.8 * Math.exp(-0.075) * reps)
        ).toFixed(2),
        formula: `(100 * ${weight}) / (46.8 + (53.8 * ${Math.exp(
          -0.075
        ).toFixed(2)}* ${reps}))`,
      },
      epley: {
        title: "Epley",
        value: (weight * (1 + 0.0333 * reps)).toFixed(2),
        formula: `${weight} * (1 + 0.0333 * ${reps})`,
      },
    });
  }
);
