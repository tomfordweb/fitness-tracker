import { Container } from "@mui/material";
import { NextPage } from "next";
import { CalculatorList } from "../../component/calculator-list";
import { PageTitle } from "../../component/page-title";
import { NUTRITION_CALCULATORS } from "../../lib/constant";
import { CalculatorLink } from "../../lib/interface";

const BodyfatCalculators: NextPage = () => {
  const calculators: CalculatorLink[] = NUTRITION_CALCULATORS;

  return (
    <>
      <PageTitle h1="Nutrition Calculators" />
      <Container component="section">
        <CalculatorList calculators={calculators} />
      </Container>
    </>
  );
};

export default BodyfatCalculators;
