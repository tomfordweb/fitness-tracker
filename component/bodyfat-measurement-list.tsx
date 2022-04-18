import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Form } from "./calculator/shared-jp-bodyfat-controls";

export const BodyfatMeasurementList = (props: { fields: Form }) => {
  return (
    <List>
      {"chest" in props.fields && (
        <ListItem>
          <ListItemText>
            <Typography variant="overline">1: Chest</Typography>: The chest
            measurement is located between the nipple and the armpit. The
            skinfold pinch should in a diagonal line that is parallel to the
            direction of the nipple-armpit line.
          </ListItemText>
        </ListItem>
      )}
      {"midauxilary" in props.fields && (
        <ListItem>
          <ListItemText>
            <Typography variant="overline">2: Midaxillary</Typography>: The
            midaxiliary location is the horizontal or vertical skinfold on the
            side of the torso at the fifth rib. Follow a horizontal line from
            the tip of your sternum.
          </ListItemText>
        </ListItem>
      )}
      {"tricep" in props.fields && (
        <ListItem>
          <ListItemText>
            <Typography variant="overline">3: Tricep</Typography>: Take a
            vertical skinfold that is halfway between the top portion of the
            shoulder and the elbow.
          </ListItemText>
        </ListItem>
      )}
      {"subscapular" in props.fields && (
        <ListItem>
          <ListItemText>
            <Typography variant="overline">4: Subscapular</Typography>: The
            subscapular site is located at the bottom tip of the shoulder blade.
            This shold be measured at a 45 degree angle.
          </ListItemText>
        </ListItem>
      )}
      {"abdominal" in props.fields && (
        <ListItem>
          <ListItemText>
            <Typography variant="overline">5: Abdominal</Typography>: For the
            abdominal measurement, take a horizontal or vertical skinfold
            (whichever is most comfortable) that is one inch to the right of the
            belly button.
          </ListItemText>
        </ListItem>
      )}
      {"suprailiac" in props.fields && (
        <ListItem>
          <ListItemText>
            <Typography variant="overline">6: Suprailiac</Typography>: The
            suprailiac measurement shold be taken be at a 45&deg; angle, going
            up and away from the body, approximately two inches above the iliac
            crest.
          </ListItemText>
        </ListItem>
      )}
      {"thigh" in props.fields && (
        <ListItem>
          <ListItemText>
            <Typography variant="overline">7: Thigh</Typography>: The thigh
            measurement is located along the anterior portion the quadriceps
            muscle, halfway between the upper part of the knee and the fold at
            the top of the thigh.
          </ListItemText>
        </ListItem>
      )}
    </List>
  );
};
