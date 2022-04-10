import { Container } from "@mui/material";
import type { NextPage } from "next";
import { BodyfatMeasurementDescription } from "../../component/bodyfat-measurement-description";
import { JacksonPollock3PointBodyfatCalculator } from "../../component/calculator/jp-3-point-bodyfat-calculator";
import { PageTitle } from "../../component/page-title";

const JacksonPollock3PointBodyfatCalculatorPage: NextPage = () => {
  return (
    <>
      <PageTitle h1="Jackson & Pollock 3 Point Bodyfat Calculator" />
      <Container component="section">
        <JacksonPollock3PointBodyfatCalculator />
        <BodyfatMeasurementDescription
          fields={{
            chest: true,
            tricep: true,
            abdominal: true,
            suprailiac: true,
            thigh: true,
          }}
        />
      </Container>
    </>
  );
};

export default JacksonPollock3PointBodyfatCalculatorPage;
