import { NextPage } from "next";
import { BodyfatMeasurementDescription } from "../../component/bodyfat-measurement-description";
import { JacksonPollock4PointBodyfatCalculator } from "../../component/calculator/jp-4-point-calculator";

const JacksonPollock4PointBodyfatCalculatorPage: NextPage = () => {
  return (
    <section>
      <article>
        <JacksonPollock4PointBodyfatCalculator />
      </article>
      <article>
        <BodyfatMeasurementDescription
          fields={{
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

export default JacksonPollock4PointBodyfatCalculatorPage;
