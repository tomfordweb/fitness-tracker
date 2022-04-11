export const calculateBasalMetabolicRate = (props: {
  weightInKilograms: number;
  heightInCentimeters: number;
  age: number;
  gender: string;
}) => {
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
    multipliers: { weight: number; height: number; age: number; number: number }
  ) => {
    return {
      value:
        multipliers.number +
        multipliers.weight * props.weight +
        multipliers.height * props.height -
        multipliers.age * props.age,
      formula: `${multipliers.number} + (${multipliers.weight} * ${props.weight} + (${multipliers.height} * ${props.height}) - ( ${props.weight} * ${props.age} )`,
    };
  };

  return genderNeutralCalculator(
    {
      weight: props.weightInKilograms,
      height: props.heightInCentimeters,
      age: props.age,
    },
    multipliers[props.gender as "male" | "female"]
  );
};
export const calculateOneRepMax = (props: { weight: number; reps: number }) => {
  const { weight, reps } = props;

  return {
    brzycki: {
      value: (weight * (36 / (37 - reps))).toFixed(2),
      formula: `${weight} * (36 / ( 37 ${reps}))`,
    },
    oconner: {
      value: (weight * (1 + 0.025 * reps)).toFixed(2),
      formula: `${weight} * (1. 0.025 + ${reps})`,
    },
    mayhew: {
      value: ((100 * weight) / (52.2 + 41.9 * (Math.E - 0.055) * reps)).toFixed(
        2
      ),
      formula: `100 * ${weight} / (52.2 + (41.9 * ${(Math.E - 0.055).toFixed(
        2
      )} * ${reps}))`,
    },
    lombardi: {
      value: Math.pow(weight * reps, 0.1).toFixed(2),
      formula: `${weight} * ${reps} ^ 0.1`,
    },
    lander: {
      value: ((100 * weight) / (101.4 - 2.67123 * reps)).toFixed(2),
      formula: `(100 * ${weight}) / (101.4 - 2.67123 * ${reps})`,
    },
    wathan: {
      value: ((100 * weight) / (46.8 + 53.8 * Math.exp(-0.075) * reps)).toFixed(
        2
      ),
      formula: `(100 * ${weight}) / (46.8 + (53.8 * ${Math.exp(-0.075).toFixed(
        2
      )}* ${reps}))`,
    },
    epley: {
      value: (weight * (1 + 0.0333 * reps)).toFixed(2),
      formula: `${weight} * (1 + 0.0333 * ${reps})`,
    },
  };
};
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
  abdominal: string;
  thigh: string;
  age: string;
}) => {
  const skinFolds = [props.chest, props.abdominal, props.thigh].map((val) =>
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

export const calculateJacksonPollock4Point = (props: {
  gender: string;
  age: string;
  tricep: string;
  abdomen: string;
  suprailiac: string;
  thigh: string;
}) => {
  const { gender, age } = props;

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
  const skinFolds = [
    props.tricep,
    props.abdomen,
    props.suprailiac,
    props.thigh,
  ].map((val) => parseInt(val));

  const sumOfSkinfolds = skinFolds.reduce((a, b) => a + b, 0);

  const bodyFat =
    multipliers.one * sumOfSkinfolds -
    multipliers.two * Math.pow(sumOfSkinfolds, 2) +
    multipliers.three * parseInt(age) -
    multipliers.number;

  const bodyFatFormula = `(${multipliers.one} * (${skinFolds.join("+")})) -
            (${multipliers.two} * (${skinFolds.join("+")})^2) + (${
    multipliers.three
  } * ${age}) + ${multipliers.number}`;

  return {
    bodyFat,
    bodyFatFormula,
  };
};

// mm
export const calculateJacksonPollock3PointMale = (props: {
  chest: string;
  abdominal: string;
  thigh: string;
  age: string;
}) => {
  const skinFolds = [props.chest, props.abdominal, props.thigh].map((val) =>
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
  midauxilary: string;
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
