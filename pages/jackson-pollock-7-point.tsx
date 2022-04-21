import type { NextPage } from "next";
import Head from "next/head";
import { SevenPointBodyFatCalculator } from "../component/calculator/jp-7-point-calculator";
import { PageTitle } from "../component/page-title";

const JacksonPollockBodyfatCalculator: NextPage = () => {
  return (
    <>
      <Head>
        <title>7 Fold Bodyfat Calculator - Jackson & Pollock</title>
      </Head>
      <PageTitle h1="Jackson & Pollock 7 Point Bodyfat Calculator" />
      <SevenPointBodyFatCalculator />
    </>
  );
};

export default JacksonPollockBodyfatCalculator;
