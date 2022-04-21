import {
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { OneRmCalculator } from "../component/calculator/one-rm-calculator";
import { PageTitle } from "../component/page-title";
import { ResultCard } from "../component/result-card";
import { ApiSimpleCalculatedData } from "./api/calculator/one-rep-max";

// https://goodcalculators.com/bench-press-calculator/
export const OneRepMaxCalculatorPage: NextPage = () => {
  const [oneRms, setOneRms] = useState<ApiSimpleCalculatedData[]>([]);

  return (
    <>
      <Head>
        <title>One Rep Max Calculator - Find Your Strength!</title>
      </Head>
      <PageTitle h1="One Rep Max (1RM) Calculator" />
      <Container maxWidth="sm" component="section">
        <Typography sx={{ mb: 3 }}>
          In order to calculate your 1RM, enter the weight and maximum amount of
          repititions you can perform for the given exercise.
        </Typography>
        <Box sx={{ mb: 5 }}>
          <OneRmCalculator onSuccess={setOneRms} />
        </Box>
      </Container>
      <Container>
        {oneRms && oneRms.length > 0 && (
          <>
            <Typography>
              Below are the one rep max calculations for the provided weight and
              reps.
            </Typography>
            <Grid sx={{ my: 3 }} container spacing={2}>
              {oneRms.map((oneRm) => (
                <Grid key={oneRm.title} item xs={6} sm={4} md={3}>
                  <ResultCard {...oneRm} />
                </Grid>
              ))}
            </Grid>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: "secondary.main" }}>
                    <TableCell>Formula</TableCell>
                    {oneRms[0].percentages.map((header, i) => (
                      <TableCell
                        key={i}
                        align="right"
                        sx={{ fontWeight: "bold" }}
                      >
                        {header.percent}%
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {oneRms.map((row) => (
                    <TableRow
                      key={row.title}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ bgcolor: "secondary.light" }}
                      >
                        {row.title}
                      </TableCell>

                      {row.percentages.map((percentage, i) => (
                        <TableCell align="right" key={i}>
                          {percentage.weight.toFixed(2)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Container>
    </>
  );
};
export default OneRepMaxCalculatorPage;
