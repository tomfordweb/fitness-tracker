import { Container } from "@mui/material";
import { NextPage } from "next";
import { BasalMetabolicRateCalculator } from "../../component/calculator/bmr-calculator";
import { PageTitle } from "../../component/page-title";

const BasalMetabolicRateCalculatorPage: NextPage = () => {
  return (
    <>
      <PageTitle h1="Basal Metabolic Rate (BMR) Calculator" />

      <Container component="section">
        <BasalMetabolicRateCalculator />
      </Container>
    </>
  );
};

export default BasalMetabolicRateCalculatorPage;
