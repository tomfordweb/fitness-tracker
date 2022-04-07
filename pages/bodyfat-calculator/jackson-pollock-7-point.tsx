import type { NextPage } from "next";
import { SevenPointBodyFatCalculator } from "../../component/calculator/jackson-pollock-bodyfat";

const JacksonPollockBodyfatCalculator: NextPage = () => {
  return (
    <div>
      <SevenPointBodyFatCalculator />
    </div>
  );
};

export default JacksonPollockBodyfatCalculator;
