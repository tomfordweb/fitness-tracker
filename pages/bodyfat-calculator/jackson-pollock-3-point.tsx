import type { NextPage } from "next";
import { BodyfatMeasurementDescription } from "../../component/bodyfat-measurement-description";
import { JacksonPollock3PointBodyfatCalculator } from "../../component/calculator/jp-3-point-bodyfat-calculator";

const JacksonPollock3PointBodyfatCalculatorPage: NextPage = () => {
  return (
    <section>
      <article>
        <JacksonPollock3PointBodyfatCalculator />
      </article>
      <article>
        <BodyfatMeasurementDescription
          fields={{
            chest: true,
            tricep: true,
            abdominal: true,
            suprailiac: true,
            thigh: true,
          }}
        />
      </article>
    </section>
  );
};

export default JacksonPollock3PointBodyfatCalculatorPage;
