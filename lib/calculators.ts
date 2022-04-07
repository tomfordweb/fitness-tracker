export const calculateJacksonPollock7Point = (props: {
  gender: string;
  age: string;
  chest: string;
  midaxilar: string;
  tricep: string;
  subscapular: string;
  abdominal: string;
  suprailiac: string;
  thigh: string;
}) => {
  const { gender, age, ...everythingElse } = props;

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
  const skinFolds = Object.values(everythingElse).map((val) => parseInt(val));

  const sumOfSkinfolds = skinFolds.reduce((a, b) => a + b, 0);
  const multipliers = densityMultipliers[gender as "male" | "female"];

  const bodyDensity =
    multipliers.number -
    multipliers.one * sumOfSkinfolds +
    multipliers.two * Math.pow(sumOfSkinfolds, 2) -
    multipliers.three * parseInt(age);

  const bodyDensityFormula = `${multipliers.number} -
            (${multipliers.one} * (${skinFolds.join("+")})) +
            (${multipliers.two} * (${skinFolds.join("+")})^2) -
            (${multipliers.three} * ${age})`;
  const bodyFatFormula = `495 / ${bodyDensity} - 450`;
  const bodyFat = 495 / bodyDensity - 450;
  return {
    bodyDensity,
    bodyDensityFormula,
    bodyFat,
    bodyFatFormula,
  };
};
