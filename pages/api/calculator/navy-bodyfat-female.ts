import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import validate from "../../../lib/middleware";

const schema = Joi.object({
  // kilograms
  waist: Joi.number().required(),
  // centimeters
  hips: Joi.number().required(),
  neck: Joi.number().required(),
  height: Joi.string().required(),
});

export default validate(
  { query: schema },
  (
    req: NextApiRequest,
    res: NextApiResponse<{ bodyFat: number; bodyFatFormula: string }>
  ) => {
    let {
      query: { waist, height, neck, hips },
    } = req;
    const data = {
      bodyFat:
        163.205 *
          Math.log10(
            parseInt(waist as string) +
              parseInt(hips as string) -
              parseInt(neck as string)
          ) -
        97.684 * Math.log10(parseInt(height as string)) -
        78.387,
      bodyFatFormula: `163.205 * log10(${waist} + ${hips} - ${neck}) - 97.684 * log10(${height}) - 78.387`,
    };
    res.status(200).json(data);
  }
);
