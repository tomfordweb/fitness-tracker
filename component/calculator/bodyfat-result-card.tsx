import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Calculation = (props: {
  title: string;
  value?: string;
  formula: string;
}) => {
  if (!props.value) {
    return <></>;
  }
  return (
    <Box>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="h5" component="div">
        {props.value}
      </Typography>
    </Box>
  );
};

export const BodyfatResultCard = (props: {
  bodyFat: number;
  bodyFatFormula: string;
  bodyDensity?: number;
  bodyDensityFormula?: string;
}) => {
  return (
    <Paper>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Calculation
              title="Bodyfat"
              value={props.bodyFat.toFixed(2)}
              formula={props.bodyFatFormula}
            />
            <Calculation
              title="Body Density"
              value={props.bodyDensity}
              formula={props.bodyDensityFormula}
            />
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};
