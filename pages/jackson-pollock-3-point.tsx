import type { NextPage } from "next";
import { JacksonPollock3PointBodyfatCalculator } from "../component/calculator/jp-3-point-bodyfat-calculator";
import { PageTitle } from "../component/page-title";

const JacksonPollock3PointBodyfatCalculatorPage: NextPage = () => {
  return (
    <>
      <PageTitle h1="Jackson & Pollock 3 Point Bodyfat Calculator" />
      <JacksonPollock3PointBodyfatCalculator />
    </>
  );
};

export default JacksonPollock3PointBodyfatCalculatorPage;
