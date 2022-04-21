import type { NextPage } from "next";
import Head from "next/head";
import { JacksonPollock3PointBodyfatCalculator } from "../component/calculator/jp-3-point-bodyfat-calculator";
import { PageTitle } from "../component/page-title";

const JacksonPollock3PointBodyfatCalculatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>3 Fold Bodyfat Calculator - Jackson & Pollock</title>
      </Head>
      <PageTitle h1="Jackson & Pollock 3 Point Bodyfat Calculator" />
      <JacksonPollock3PointBodyfatCalculator />
    </>
  );
};

export default JacksonPollock3PointBodyfatCalculatorPage;
