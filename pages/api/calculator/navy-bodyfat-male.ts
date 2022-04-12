import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import validate from "../../../lib/middleware";

const schema = Joi.object({
  abdomen: Joi.number().required(),
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
      query: { neck, height, abdomen },
    } = req;
    console.log(
      86.01 *
        Math.log10(parseInt(abdomen as string) - parseInt(neck as string)) -
        70.041 * Math.log10(parseInt(height as string)) +
        36.76
    );
    const data = {
      bodyFatFormula: `86.01 * log10(${abdomen} - ${neck}) - 70.041 * log10(${height}) + 36.76`,
      bodyFat:
        86.01 *
          Math.log10(parseInt(abdomen as string) - parseInt(neck as string)) -
        70.041 * Math.log10(parseInt(height as string)) +
        36.76,
    };
    res.status(200).json(data);
  }
);
