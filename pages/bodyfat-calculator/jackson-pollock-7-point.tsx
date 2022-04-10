import { Container } from "@mui/material";
import type { NextPage } from "next";
import { BodyfatMeasurementDescription } from "../../component/bodyfat-measurement-description";
import { SevenPointBodyFatCalculator } from "../../component/calculator/jp-7-point-calculator";
import { PageTitle } from "../../component/page-title";

const JacksonPollockBodyfatCalculator: NextPage = () => {
  return (
    <>
      <PageTitle h1="Jackson & Pollock 7 Point Bodyfat Calculator" />
      <Container>
        <SevenPointBodyFatCalculator />
        <BodyfatMeasurementDescription
          fields={{
            chest: true,
            midauxilary: true,
            tricep: true,
            subscapular: true,
            abdominal: true,
            suprailiac: true,
            thigh: true,
          }}
        />
      </Container>
    </>
  );
};

export default JacksonPollockBodyfatCalculator;
