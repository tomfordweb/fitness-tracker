import type { NextPage } from "next";
import { SevenPointBodyFatCalculator } from "../../component/calculator/jp-7-point-calculator";

const JacksonPollockBodyfatCalculator: NextPage = () => {
  return (
    <div>
      <SevenPointBodyFatCalculator />
    </div>
  );
};

export default JacksonPollockBodyfatCalculator;
