import { NextPage } from "next";
import Head from "next/head";
import { JacksonPollock4PointBodyfatCalculator } from "../component/calculator/jp-4-point-calculator";
import { PageTitle } from "../component/page-title";

const JacksonPollock4PointBodyfatCalculatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>4 Fold Bodyfat Calculator - Jackson & Pollock</title>
      </Head>
      <PageTitle h1="Jackson & Pollock 4 Point Bodyfat Calculator" />
      <JacksonPollock4PointBodyfatCalculator />
    </>
  );
};

export default JacksonPollock4PointBodyfatCalculatorPage;
