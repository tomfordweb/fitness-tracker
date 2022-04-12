// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { jacksonPollockBodyfatFromDensity } from "../../../lib/calculators";
import Joi from "joi";
import validate from "../../../lib/middleware";

const schema = Joi.object({
  style: Joi.string(),
  tricep: Joi.number().min(0).required(),
  thigh: Joi.number().min(0).required(),
  suprailiac: Joi.number().min(0).required(),
  age: Joi.number().min(0).required(),
});

interface ReturnData {
  bodyFat: number;
}

export default validate(
  { query: schema },
  (req: NextApiRequest, res: NextApiResponse<ReturnData>) => {
    const {
      query: { tricep, suprailiac, thigh, age },
    } = req;

    const skinFolds = [tricep, suprailiac, thigh].map((val) =>
      parseInt(val as string)
    );

    const sumOfSkinfolds = skinFolds.reduce((a, b) => a + b, 0);

    const data = jacksonPollockBodyfatFromDensity({
      bodyDensity:
        1.0994921 -
        0.0009929 * sumOfSkinfolds +
        0.0000023 * Math.pow(sumOfSkinfolds, 2) -
        0.0001392 * parseInt(age as string),
      bodyDensityFormula: `1.0994921 - 0.0009929 * ( ${skinFolds.join(
        "+"
      )} ) + 0.0000023 * ( ${skinFolds.join("+")} ) ^2 - 0.0001392 * ${age}`,
    });
    res.status(200).json(data);
  }
);
