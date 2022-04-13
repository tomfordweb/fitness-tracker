import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { useState } from "react";
import { OneRmCalculator } from "../../component/calculator/one-rm-calculator";
import { PageTitle } from "../../component/page-title";
import { ResultCard } from "../../component/result-card";
import { SimpleCalculatedData } from "../../types";

export interface OneRmCalculations {
  brzycki: SimpleCalculatedData & { title: string };
  oconner: SimpleCalculatedData & { title: string };
  mayhew: SimpleCalculatedData & { title: string };
  lombardi: SimpleCalculatedData & { title: string };
  lander: SimpleCalculatedData & { title: string };
  wathan: SimpleCalculatedData & { title: string };
  epley: SimpleCalculatedData & { title: string };
}
export const OneRepMaxCalculatorPage: NextPage = () => {
  const [oneRms, setOneRms] = useState<OneRmCalculations | null>(null);
  const [activeCard, setActiveCard] = useState<
    (SimpleCalculatedData & { title: string }) | null
  >(null);

  return (
    <>
      <PageTitle h1="One Rep Max (1RM) Calculator" />
      <Container component="section">
        <Box sx={{ mb: 5 }}>
          <OneRmCalculator onSuccess={setOneRms} />
        </Box>
        {oneRms && (
          <>
            <Typography>
              Below are the one rep max calculations for the provided weight and
              reps. You can click a card below to see the percentage against the
              rep range table.
            </Typography>
            <Grid sx={{ mt: 3 }} container spacing={2}>
              {Object.values(oneRms).map((oneRm, i) => (
                <Grid key={i} item xs={3} onClick={() => setActiveCard(oneRm)}>
                  <ResultCard
                    active={activeCard?.title === oneRm.title}
                    {...oneRm}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
        {activeCard && (
          <table>
            <thead>
              <tr>
                <th>Repetitions</th>
                <th>Percentage of 1RM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>97%</td>
              </tr>
              <tr>
                <td>3</td>
                <td>94%</td>
              </tr>
              <tr>
                <td>4</td>
                <td>92%</td>
              </tr>
              <tr>
                <td>5</td>
                <td>89%</td>
              </tr>
              <tr>
                <td>6</td>
                <td>86%</td>
              </tr>
              <tr>
                <td>7</td>
                <td>83%</td>
              </tr>
              <tr>
                <td>8</td>
                <td>81%</td>
              </tr>
              <tr>
                <td>9</td>
                <td>78%</td>
              </tr>
              <tr>
                <td>10</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>11</td>
                <td>73%</td>
              </tr>
              <tr>
                <td>12</td>
                <td>71%</td>
              </tr>
              <tr>
                <td>13</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>14</td>
                <td>68%</td>
              </tr>
              <tr>
                <td>15</td>
                <td>67%</td>
              </tr>
              <tr>
                <td>16</td>
                <td>65%</td>
              </tr>
              <tr>
                <td>17</td>
                <td>64%</td>
              </tr>
              <tr>
                <td>18</td>
                <td>63%</td>
              </tr>
              <tr>
                <td>19</td>
                <td>61%</td>
              </tr>
              <tr>
                <td>20</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>21</td>
                <td>59%</td>
              </tr>
              <tr>
                <td>22</td>
                <td>58%</td>
              </tr>
              <tr>
                <td>23</td>
                <td>57%</td>
              </tr>
              <tr>
                <td>24</td>
                <td>56%</td>
              </tr>
              <tr>
                <td>25</td>
                <td>55%</td>
              </tr>
              <tr>
                <td>26</td>
                <td>54%</td>
              </tr>
              <tr>
                <td>27</td>
                <td>53%</td>
              </tr>
              <tr>
                <td>28</td>
                <td>52%</td>
              </tr>
              <tr>
                <td>29</td>
                <td>51%</td>
              </tr>
              <tr>
                <td>30</td>
                <td>50%</td>
              </tr>
            </tbody>
          </table>
        )}
      </Container>
    </>
  );
};
export default OneRepMaxCalculatorPage;
