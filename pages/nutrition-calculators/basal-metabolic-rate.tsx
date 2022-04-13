import { Box, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import { BasalMetabolicRateCalculator } from "../../component/calculator/bmr-calculator";
import { PageTitle } from "../../component/page-title";
import Link from "../../component/link";
import { useState } from "react";

const BasalMetabolicRateCalculatorPage: NextPage = () => {
  const [bmr, setBmr] = useState<number>(0);
  const handleFormUpdate = (props: { value: number }) => {
    setBmr(parseInt(props.value.toFixed(0)));
  };
  return (
    <>
      <PageTitle h1="Basal Metabolic Rate (BMR) Calculator" />
      <Container component="section">
        <BasalMetabolicRateCalculator handleFormUpdate={handleFormUpdate} />
        <Typography variant="h2">
          What is the Basal Metabolic Rate (BMR)
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Basal Metabolic Rate is the number of calories required to keep your
          body functioning at rest. It is the equivalent of determining how much
          gasonline a car would consume at idle. BMR is also known as your
          body’s metabolism; therefore, any increase to your metabolic weight,
          such as exercise, will increase your BMR.
        </Typography>
        <Typography sx={{ mb: 3 }}>
          In a resting state, energy will be used only to maintain vital organs,
          which include the heart, lungs, kidneys, nervous system, intestines,
          liver, lungs, sex organs, muscles, and skin. For most people, up to of
          ~70% of total energy (calories) burned each day is due to upkeep.
        </Typography>
        <Typography variant="h2">
          What can I do with my Basal Metabolic Rate?
        </Typography>
        <Typography>
          With your BMR you can{" "}
          {bmr ? (
            <Link
              href={`/nutrition-calculators/total-daily-energy-expenditure?bmr=${bmr}`}
            >
              determine your Total Daily Energy Expenditure (TDEE)
            </Link>
          ) : (
            <Link href="/nutrition-calculators/total-daily-energy-expenditure">
              determine your Total Daily Energy Expenditure (TDEE)
            </Link>
          )}{" "}
          which will tell you how many calories you can consume in a day to
          maintain weight.
        </Typography>
      </Container>
    </>
  );
};

export default BasalMetabolicRateCalculatorPage;
