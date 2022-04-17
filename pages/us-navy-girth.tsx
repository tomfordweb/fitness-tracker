import {
  Container,
  Grid,
  Box,
  List,
  ListItemText,
  ListItem,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { UsNavyBodyfatCalculator } from "../component/calculator/us-navy-girth";
import { PageTitle } from "../component/page-title";

const UsNavyGirthCalculatorPage: NextPage = () => {
  return (
    <>
      <PageTitle h1="US Navy Bodyfat Calculator" />
      <Container>
        <UsNavyBodyfatCalculator />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" component="h3">
              US Navy Tape Measurement Locations for Males
            </Typography>

            <List>
              <ListItem>
                <ListItemText>
                  Neck: The neck tape measurement consists of the circumference
                  of the neck, in the location immediately above the Adam’s
                  apple.
                </ListItemText>
                <ListItemText>
                  Waist: The waist tape measurement consists of the
                  circumference of the narrowest waist level, which is located
                  midway between the lowest rib and the top of the hip bone.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" component="h3">
              US Navy Tape Measurement Locations for Females
            </Typography>
            <Box>
              <List>
                <ListItem>
                  <ListItemText>
                    Neck: The neck tape measurement consists of the
                    circumference of the neck, in the location immediately above
                    the Adam’s apple.
                  </ListItemText>
                  <ListItemText>
                    Waist: The waist tape measurement consists of the
                    circumference of the narrowest waist level, which is located
                    midway between the lowest rib and the top of the hip bone.
                  </ListItemText>
                  <ListItemText>
                    Hip: The hip tape measurement consists of the circumference
                    of the waist at the level of the greatest protrusion of the
                    gluteal muscles.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default UsNavyGirthCalculatorPage;
