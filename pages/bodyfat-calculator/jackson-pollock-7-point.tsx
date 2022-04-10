import { Grid, Paper } from "@mui/material";
import type { NextPage } from "next";
import { SevenPointBodyFatCalculator } from "../../component/calculator/jp-7-point-calculator";

const JacksonPollockBodyfatCalculator: NextPage = () => {
  return (
    <section>
      <article>
        <SevenPointBodyFatCalculator />
      </article>
      <article>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ul>
              <li>
                Chest: The chest measurement is located between the nipple and
                the armpit. The skinfold pinch should in a diagonal line that is
                parallel to the direction of the nipple-armpit line.
              </li>
              <li>
                Midaxillary: The midaxiliary location is the horizontal or
                vertical skinfold on the side of the torso at the fifth rib.
                Follow a horizontal line from the tip of your sternum.
              </li>
              <li>
                Tricep: Take a vertical skinfold that is halfway between the top
                portion of the shoulder and the elbow.
              </li>
              <li>
                Subscapular: The subscapular site is located at the bottom tip
                of the shoulder blade. This shold be measured at a 45 degree
                angle.
              </li>
              <li>
                Abdominal: For the abdominal measurement, take a horizontal or
                vertical skinfold (whichever is most comfortable) that is one
                inch to the right of the belly button.
              </li>
              <li>
                Suprailiac: The suprailiac measurement shold be taken be at a
                45&deg; angle, going up and away from the body, approximately
                two inches above the iliac crest.
              </li>
              <li>
                Thigh: The thigh measurement is located along the anterior
                portion the quadriceps muscle, halfway between the upper part of
                the knee and the fold at the top of the thigh.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{ height: "100%", bgcolor: "secondary.main" }}
              elevation={8}
            />
          </Grid>
        </Grid>
        <p>
          All skinfold Measurements are taken on the right side of body. The
          muscle group that is being assessed should be relaxed. Wait one to two
          seconds after releasing the calipers, and take multiple measurements
          to find an average.
        </p>
      </article>
    </section>
  );
};

export default JacksonPollockBodyfatCalculator;
