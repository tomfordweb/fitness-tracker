import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import validate from "../../../lib/middleware";

const schema = Joi.object({
  // kilograms
  weight: Joi.number().required(),
  // centimeters
  height: Joi.number().required(),
  age: Joi.number().required(),
  gender: Joi.string().required(),
});

export default validate(
  { query: schema },
  (
    req: NextApiRequest,
    res: NextApiResponse<{ value: number; formula: string }>
  ) => {
    let {
      query: { weight, height, age, gender },
    } = req;
    const multipliers = {
      male: {
        number: 88.362,
        weight: 13.397,
        height: 4.799,
        age: 5.677,
      },
      female: {
        number: 447.593,
        weight: 9.247,
        height: 3.098,
        age: 4.33,
      },
    };

    const genderNeutralCalculator = (
      props: { weight: number; height: number; age: number },
      multipliers: {
        weight: number;
        height: number;
        age: number;
        number: number;
      }
    ) => {
      return {
        value:
          multipliers.number +
          multipliers.weight * props.weight +
          multipliers.height * props.height -
          multipliers.age * parseInt(age as string),
        formula: `${multipliers.number} + (${multipliers.weight} * ${props.weight} + (${multipliers.height} * ${props.height}) - ( ${props.weight} * ${props.age} )`,
      };
    };

    const data = genderNeutralCalculator(
      {
        weight: parseInt(weight as string),
        height: parseInt(height as string),
        age: parseInt(age as string),
      },
      multipliers[gender as "male" | "female"]
    );
    res.status(200).json(data);
  }
);
