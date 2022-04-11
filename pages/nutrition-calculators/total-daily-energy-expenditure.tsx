import { Container } from "@mui/material";
import { NextPage } from "next";
import { TdeeCalculator } from "../../component/calculator/tdee-calculator";
import { PageTitle } from "../../component/page-title";

const TdeeCalculatorPage: NextPage = () => {
  return (
    <>
      <PageTitle h1="Total Daily Energy Expenditure (TDEE) Calculator" />
      <Container component="section">
        <TdeeCalculator />
      </Container>
    </>
  );
};

export default TdeeCalculatorPage;
