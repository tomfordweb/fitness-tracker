import { Paper, Grid } from "@mui/material";
import { BodyfatMeasurementList } from "./bodyfat-measurement-list";

export const BodyfatMeasurementDescription = (props: {
  fields: {
    chest?: true;
    midauxilary?: true;
    tricep?: true;
    subscapular?: true;
    abdominal?: true;
    suprailiac?: true;
    thigh?: true;
  };
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <p>
          All skinfold Measurements are taken on the right side of body. The
          muscle group that is being assessed should be relaxed. Wait one to two
          seconds after releasing the calipers, and take multiple measurements
          to find an average.
        </p>
      </Grid>
      <Grid item xs={12} md={8}>
        <BodyfatMeasurementList fields={props.fields} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          sx={{ height: "100%", bgcolor: "secondary.main" }}
          elevation={8}
        />
      </Grid>
    </Grid>
  );
};
