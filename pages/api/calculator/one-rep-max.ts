import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import validate from "../../../lib/middleware";

const schema = Joi.object({
  weight: Joi.number().required(),
  reps: Joi.number().required(),
});

export default validate(
  { query: schema },
  (
    req: NextApiRequest,
    res: NextApiResponse<{
      brzycki: {
        value: string;
        formula: string;
      };
      oconner: {
        value: string;
        formula: string;
      };
      mayhew: {
        value: string;
        formula: string;
      };
      lombardi: {
        value: string;
        formula: string;
      };
      lander: {
        value: string;
        formula: string;
      };
      wathan: {
        value: string;
        formula: string;
      };
      epley: {
        value: string;
        formula: string;
      };
    }>
  ) => {
    const weight = parseInt(req.query.weight as string);
    const reps = parseInt(req.query.reps as string);

    res.status(200).json({
      brzycki: {
        value: (weight * (36 / (37 - reps))).toFixed(2),
        formula: `${weight} * (36 / ( 37 ${reps}))`,
      },
      oconner: {
        value: (weight * (1 + 0.025 * reps)).toFixed(2),
        formula: `${weight} * (1. 0.025 + ${reps})`,
      },
      mayhew: {
        value: (
          (100 * weight) /
          (52.2 + 41.9 * (Math.E - 0.055) * reps)
        ).toFixed(2),
        formula: `100 * ${weight} / (52.2 + (41.9 * ${(Math.E - 0.055).toFixed(
          2
        )} * ${reps}))`,
      },
      lombardi: {
        value: Math.pow(weight * reps, 0.1).toFixed(2),
        formula: `${weight} * ${reps} ^ 0.1`,
      },
      lander: {
        value: ((100 * weight) / (101.4 - 2.67123 * reps)).toFixed(2),
        formula: `(100 * ${weight}) / (101.4 - 2.67123 * ${reps})`,
      },
      wathan: {
        value: (
          (100 * weight) /
          (46.8 + 53.8 * Math.exp(-0.075) * reps)
        ).toFixed(2),
        formula: `(100 * ${weight}) / (46.8 + (53.8 * ${Math.exp(
          -0.075
        ).toFixed(2)}* ${reps}))`,
      },
      epley: {
        value: (weight * (1 + 0.0333 * reps)).toFixed(2),
        formula: `${weight} * (1 + 0.0333 * ${reps})`,
      },
    });
  }
);
