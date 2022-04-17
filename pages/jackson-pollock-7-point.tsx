import type { NextPage } from "next";
import { SevenPointBodyFatCalculator } from "../component/calculator/jp-7-point-calculator";
import { PageTitle } from "../component/page-title";

const JacksonPollockBodyfatCalculator: NextPage = () => {
  return (
    <>
      <PageTitle h1="Jackson & Pollock 7 Point Bodyfat Calculator" />
      <SevenPointBodyFatCalculator />
    </>
  );
};

export default JacksonPollockBodyfatCalculator;
