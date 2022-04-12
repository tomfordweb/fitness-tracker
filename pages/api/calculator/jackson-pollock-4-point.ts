// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi";
import validate from "../../../lib/middleware";

const schema = Joi.object({
  style: Joi.string(),
  gender: Joi.string().required(),
  age: Joi.number().min(0).required(),
  tricep: Joi.number().min(0).required(),
  abdominal: Joi.number().min(0).required(),
  suprailiac: Joi.number().min(0).required(),
  thigh: Joi.number().min(0).required(),
});

interface ReturnData {
  bodyFat: number;
  bodyFatFormula: string;
}

export default validate(
  { query: schema },
  (req: NextApiRequest, res: NextApiResponse<ReturnData>) => {
    const { tricep, abdominal, suprailiac, thigh, gender, age } = req.query;

    const densityMultipliers = {
      female: {
        one: 0.29669,
        two: 0.00043,
        three: 0.02963,
        number: 1.4072,
      },
      male: {
        one: 0.29288,
        two: 0.0005,
        three: 0.15845,
        number: 5.76377,
      },
    };
    const multipliers = densityMultipliers[gender as "male" | "female"];

    const skinFolds = [tricep, abdominal, suprailiac, thigh].map((val) =>
      parseInt(val as string)
    );

    const sumOfSkinfolds = skinFolds.reduce((a, b) => a + b, 0);

    const bodyFat =
      multipliers.one * sumOfSkinfolds -
      multipliers.two * Math.pow(sumOfSkinfolds, 2) +
      multipliers.three * parseInt(age as string) -
      multipliers.number;

    const bodyFatFormula = `(${multipliers.one} * (${skinFolds.join("+")})) -
            (${multipliers.two} * (${skinFolds.join("+")})^2) + (${
      multipliers.three
    } * ${age}) + ${multipliers.number}`;

    const data = {
      bodyFat,
      bodyFatFormula,
    };

    res.status(200).json(data);
  }
);
