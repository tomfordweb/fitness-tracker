import { Container } from "@mui/material";
import { NextPage } from "next";
import { BodyfatMeasurementDescription } from "../../component/bodyfat-measurement-description";
import { JacksonPollock4PointBodyfatCalculator } from "../../component/calculator/jp-4-point-calculator";
import { PageTitle } from "../../component/page-title";

const JacksonPollock4PointBodyfatCalculatorPage: NextPage = () => {
  return (
    <>
      <PageTitle h1="Jackson & Pollock 4 Point Bodyfat Calculator" />
      <Container>
        <JacksonPollock4PointBodyfatCalculator />
        <BodyfatMeasurementDescription
          fields={{
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

export default JacksonPollock4PointBodyfatCalculatorPage;
