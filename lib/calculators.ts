export const calculateUsNavyBodyfatCalculatorMale = (props: {
  abdomen: number;
  neck: number;
  height: number;
}) => {
  return {
    bodyFatFormula: `86.01 * log10(${props.abdomen} - ${props.neck}) - 70.041 * log10(${props.height}) + 36.76`,
    bodyFat:
      86.01 * Math.log10(props.abdomen - props.neck) -
      70.041 * Math.log10(props.height) +
      36.76,
  };
};
export const calculateUsNavyBodyfatCalculatorFemale = (props: {
  waist: number;
  hips: number;
  neck: number;
  height: number;
}) => {
  return {
    bodyFat:
      163.205 * Math.log10(props.waist + props.hips - props.neck) -
      97.684 * Math.log10(props.height) -
      78.387,
    bodyFatFormula: `163.205 * log10(${props.waist} + ${props.hips} - ${props.neck}) - 97.684 * log10(${props.height}) - 78.387`,
  };
};

// mm
export const calculateJacksonPollock3PointFemale = (props: {
  chest: string;
  abdomen: string;
  thigh: string;
  age: string;
}) => {
  const skinFolds = [props.chest, props.abdomen, props.thigh].map((val) =>
    parseInt(val)
  );

  const sumOfSkinfolds = skinFolds.reduce((a, b) => a + b, 0);

  return jacksonPollockBodyfatFromDensity({
    bodyDensity:
      1.0994921 -
      0.0009929 * sumOfSkinfolds +
      0.0000023 * Math.pow(sumOfSkinfolds, 2) -
      0.0001392 * parseInt(props.age),
    bodyDensityFormula: `1.0994921 - 0.0009929 * ( ${skinFolds.join(
      "+"
    )} ) + 0.0000023 * ( ${skinFolds.join("+")} ) ^2 - 0.0001392 * ${
      props.age
    }`,
  });
};

// mm
export const calculateJacksonPollock3PointMale = (props: {
  chest: string;
  abdomen: string;
  thigh: string;
  age: string;
}) => {
  const skinFolds = [props.chest, props.abdomen, props.thigh].map((val) =>
    parseInt(val)
  );

  const sumOfSkinfolds = skinFolds.reduce((a, b) => a + b, 0);

  return jacksonPollockBodyfatFromDensity({
    bodyDensity:
      1.10938 -
      0.0008267 * sumOfSkinfolds +
      0.0000016 * Math.pow(sumOfSkinfolds, 2) -
      0.0002574 * parseInt(props.age),
    bodyDensityFormula: `1.10938 - 0.0008267 * ( ${skinFolds.join(
      " + "
    )} ) + 0.0000016 * ( ${skinFolds.join(" + ")} )^2 - 0.0002574 * ${
      props.age
    }`,
  });
};

// mm
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

  return jacksonPollockBodyfatFromDensity({
    bodyDensity,
    bodyDensityFormula,
  });
};

const jacksonPollockBodyfatFromDensity = (props: {
  bodyDensity: number;
  bodyDensityFormula: string;
}) => {
  const bodyFat = 495 / props.bodyDensity - 450;
  return {
    ...props,
    bodyFat,
    bodyFatFormula: `495 / ( ${props.bodyDensityFormula} ) - 450`,
  };
};
