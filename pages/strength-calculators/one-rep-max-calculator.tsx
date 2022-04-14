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
import { useState } from "react";
import { OneRmCalculator } from "../../component/calculator/one-rm-calculator";
import { PageTitle } from "../../component/page-title";
import { ResultCard } from "../../component/result-card";
import { ApiSimpleCalculatedData } from "../api/calculator/one-rep-max";

// https://goodcalculators.com/bench-press-calculator/
export const OneRepMaxCalculatorPage: NextPage = () => {
  const [oneRms, setOneRms] = useState<ApiSimpleCalculatedData[]>([]);

  return (
    <>
      <PageTitle h1="One Rep Max (1RM) Calculator" />
      <Container component="section">
        <Box sx={{ mb: 5 }}>
          <OneRmCalculator onSuccess={setOneRms} />
        </Box>
        {oneRms && oneRms.length > 0 && (
          <>
            <Typography>
              Below are the one rep max calculations for the provided weight and
              reps.
            </Typography>
            <Grid sx={{ my: 3 }} container spacing={2}>
              {oneRms.map((oneRm) => (
                <Grid key={oneRm.title} item xs={3}>
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
                    {oneRms[0].percentages.map((header) => (
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
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

                      {oneRms[0].percentages.map((header) => (
                        <TableCell align="right">
                          {header.weight.toFixed(1)}
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
