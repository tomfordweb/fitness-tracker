import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import validate from "../../../lib/middleware";
import { TDEE_ACTIVITY_LEVELS } from "../../../lib/constant";

const schema = Joi.object({
  bmr: Joi.number().required(),
});

export default validate(
  { query: schema },
  (
    req: NextApiRequest,
    res: NextApiResponse<{ value: number; multiplier: number; label: string }[]>
  ) => {
    const {
      query: { bmr: queryBmr },
    } = req;
    const bmr = parseInt(queryBmr as string);

    res.status(200).json(
      TDEE_ACTIVITY_LEVELS.map((level) => ({
        ...level,
        value: level.multiplier * bmr,
      }))
    );
  }
);
