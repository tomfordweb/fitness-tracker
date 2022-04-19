import {
  Paper,
  Container,
  TableContainer,
  TableHead,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Grid,
} from "@mui/material";
import { NextPage } from "next";
import { BasalMetabolicRateCalculator } from "../component/calculator/bmr-calculator";
import { PageTitle } from "../component/page-title";
import Link from "../component/link";
import { useState } from "react";
import { BASE_URL } from "../lib/constant";
import { ResultCard } from "../component/result-card";
import { Box } from "@mui/system";

const BasalMetabolicRateCalculatorPage: NextPage = () => {
  const [bmr, setBmr] = useState<number>(0);

  const [tdee, setTdee] = useState<
    { value: number; multiplier: number; label: string }[]
  >([]);

  const handleFormUpdate = (props: { value: number }) => {
    setBmr(parseInt(props.value.toFixed(0)));

    const url = new URL(
      BASE_URL + "/api/calculator/total-daily-energy-expenditure"
    );
    url.search = new URLSearchParams({
      bmr: props.value.toString(),
    }).toString();
    fetch(url.toString())
      .then((data) => data.json())
      .then((data) => {
        setTdee(data);
      });
  };

  return (
    <>
      <PageTitle h1="Basal Metabolic Rate (BMR) Calculator" />
      <Container maxWidth={false} component="section">
        <Box
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography sx={{ mb: 3 }}>
              Enter your height in inches and weight in pounds.
            </Typography>
            <BasalMetabolicRateCalculator handleFormUpdate={handleFormUpdate} />
          </Box>
          <Box
            sx={{
              ml: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ResultCard title="BMR" value={bmr} formula="Per Day" />

            {tdee.length > 0 && (
              <Box>
                <TableContainer sx={{ mt: 5, ml: 3 }}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Activity Level</TableCell>
                        <TableCell align="right">TDEE</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tdee.map((tdee) => (
                        <TableRow
                          key={tdee.label}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Typography variant="caption">
                              {tdee.label}
                            </Typography>
                          </TableCell>

                          <TableCell align="right">
                            {tdee.value.toFixed(0)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </Box>
        </Box>

        <Typography variant="h4" component="h2">
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
        <Typography variant="h4" component="h2">
          What is Total Daily Energy Expenditure?
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Your Total Daily Energy Expenditure (TDEE) is an estimation of how
          many calories you burn per day when exercise is taken into account. It
          is calculated by first figuring out your Basal Metabolic Rate, then
          multiplying that value by an activity multiplier.{" "}
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Since your BMR represents how many calories your body burns when at
          rest, it is necessary to adjust the numbers upwards to account for the
          calories you burn during the day. This is true even for those with a
          sedentary lifestyle. Our TDEE calculator uses the best formulas and
          displays your score in a way that's easy to read and meaningful.
        </Typography>
      </Container>
    </>
  );
};

export default BasalMetabolicRateCalculatorPage;
