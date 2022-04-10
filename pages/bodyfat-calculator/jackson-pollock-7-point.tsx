import type { NextPage } from "next";
import { BodyfatMeasurementDescription } from "../../component/bodyfat-measurement-description";
import { SevenPointBodyFatCalculator } from "../../component/calculator/jp-7-point-calculator";

const JacksonPollockBodyfatCalculator: NextPage = () => {
  return (
    <section>
      <article>
        <SevenPointBodyFatCalculator />
      </article>
      <article>
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
      </article>
    </section>
  );
};

export default JacksonPollockBodyfatCalculator;
