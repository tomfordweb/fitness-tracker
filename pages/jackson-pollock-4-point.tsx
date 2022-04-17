import { NextPage } from "next";
import { JacksonPollock4PointBodyfatCalculator } from "../component/calculator/jp-4-point-calculator";
import { PageTitle } from "../component/page-title";

const JacksonPollock4PointBodyfatCalculatorPage: NextPage = () => {
  return (
    <>
      <PageTitle h1="Jackson & Pollock 4 Point Bodyfat Calculator" />
      <JacksonPollock4PointBodyfatCalculator />
    </>
  );
};

export default JacksonPollock4PointBodyfatCalculatorPage;
