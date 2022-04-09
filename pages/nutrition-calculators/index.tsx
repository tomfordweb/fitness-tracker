import { NextPage } from "next";
import { CalculatorList } from "../../component/calculator-list";
import { NUTRITION_CALCULATORS } from "../../lib/constant";
import { CalculatorLink } from "../../lib/interface";

const BodyfatCalculators: NextPage = () => {
  const calculators: CalculatorLink[] = NUTRITION_CALCULATORS;

  return (
    <div>
      <CalculatorList calculators={calculators} />
    </div>
  );
};

export default BodyfatCalculators;
