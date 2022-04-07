import type { NextPage } from "next";
import { AppBreadcrumbs } from "../../component/breadcrumbs";
import { SevenPointBodyFatCalculator } from "../../component/calculator/jackson-pollock-bodyfat";

const JacksonPollockBodyfatCalculator: NextPage = () => {
  return (
    <div>
      <AppBreadcrumbs />
      <SevenPointBodyFatCalculator />
    </div>
  );
};

export default JacksonPollockBodyfatCalculator;
