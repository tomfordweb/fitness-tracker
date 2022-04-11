import { Container } from "@mui/material";
import { NextPage } from "next";
import { OneRmCalculator } from "../../component/calculator/one-rm-calculator";
import { PageTitle } from "../../component/page-title";

export const OneRepMaxCalculatorPage: NextPage = () => {
  return (
    <>
      <PageTitle h1="One Rep Max (1RM) Calculator" />
      <Container component="section">
        <OneRmCalculator />
      </Container>
    </>
  );
};
export default OneRepMaxCalculatorPage;
