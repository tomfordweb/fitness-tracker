// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { jacksonPollockBodyfatFromDensity } from "../../../lib/calculators";
import Joi from "joi";
import validate from "../../../lib/middleware";

const schema = Joi.object({
  style: Joi.string(),
  gender: Joi.string().required(),
  age: Joi.number().min(0).required(),
  chest: Joi.number().min(0).required(),
  midauxilary: Joi.number().min(0).required(),
  tricep: Joi.number().min(0).required(),
  subscapular: Joi.number().min(0).required(),
  abdominal: Joi.number().min(0).required(),
  suprailiac: Joi.number().min(0).required(),
  thigh: Joi.number().min(0).required(),
});

interface ReturnData {
  bodyFat: number;
}

export default validate(
  { query: schema },
  (req: NextApiRequest, res: NextApiResponse<ReturnData>) => {
    const {
      gender,
      age,
      chest,
      midauxilary,
      tricep,
      subscapular,
      abdominal,
      suprailiac,
      thigh,
    } = req.query;

    const densityMultipliers = {
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
    const skinFolds = [
      chest,
      midauxilary,
      tricep,
      subscapular,
      abdominal,
      suprailiac,
      thigh,
    ].map((val) => parseInt(val as string));

    const sumOfSkinfolds = skinFolds.reduce((a, b) => a + b, 0);
    const multipliers = densityMultipliers[gender as "male" | "female"];

    const bodyDensity =
      multipliers.number -
      multipliers.one * sumOfSkinfolds +
      multipliers.two * Math.pow(sumOfSkinfolds, 2) -
      multipliers.three * parseInt(age as string);

    const bodyDensityFormula = `${multipliers.number} -
            (${multipliers.one} * (${skinFolds.join("+")})) +
            (${multipliers.two} * (${skinFolds.join("+")})^2) -
            (${multipliers.three} * ${age})`;

    const data = jacksonPollockBodyfatFromDensity({
      bodyDensity,
      bodyDensityFormula,
    });

    res.status(200).json(data);
  }
);
