// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { jacksonPollockBodyfatFromDensity } from "../../../lib/calculators";
import Joi from "joi";
import validate from "../../../lib/middleware";

const schema = Joi.object({
  style: Joi.string(),
  chest: Joi.number().min(0).required(),
  abdominal: Joi.number().min(0).required(),
  thigh: Joi.number().min(0).required(),
  age: Joi.number().min(0).required(),
});

interface ReturnData {
  bodyFat: number;
}

export default validate(
  { query: schema },
  (req: NextApiRequest, res: NextApiResponse<ReturnData>) => {
    // This function will be only executed if the incoming request complies
    // with the validation schema defined above.
    const {
      query: { chest, abdominal, thigh, age },
    } = req;

    const skinFolds = [chest, abdominal, thigh].map((val) =>
      parseInt(val as string)
    );

    const sumOfSkinfolds = skinFolds.reduce((a, b) => a + b, 0);

    const data = jacksonPollockBodyfatFromDensity({
      bodyDensity:
        1.10938 -
        0.0008267 * sumOfSkinfolds +
        0.0000016 * Math.pow(sumOfSkinfolds, 2) -
        0.0002574 * parseInt(age as string),
      bodyDensityFormula: `1.10938 - (0.0008267 * ( ${skinFolds.join(
        "+"
      )} ) +  0.0000016 * ( ${skinFolds.join("+")} ) ^2 -  0.0002574 * ${age}`,
    });
    res.status(200).json(data);
  }
);
