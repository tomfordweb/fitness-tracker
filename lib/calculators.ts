export const jacksonPollockBodyfatFromDensity = (props: {
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
