import {
  Container,
  Grid,
  List,
  ListItemText,
  ListItem,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { UsNavyBodyfatCalculator } from "../component/calculator/us-navy-girth";
import { PageTitle } from "../component/page-title";

const UsNavyGirthCalculatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bodyfat Calculator - US Navy</title>
      </Head>
      <PageTitle h1="US Navy Bodyfat Calculator" />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Typography sx={{ mb: 3 }}>
              All measurements should be taken in inches.
            </Typography>
            <UsNavyBodyfatCalculator />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Typography variant="h5" component="h3">
              US Navy Tape Measurement Locations for Females
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="overline">Neck:</Typography> The neck
                  tape measurement consists of the circumference of the neck, in
                  the location immediately above the Adam’s apple.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="overline">Waist:</Typography> The waist
                  tape measurement consists of the circumference of the
                  narrowest waist level, which is located midway between the
                  lowest rib and the top of the hip bone.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="overline">Hip:</Typography> The hip tape
                  measurement consists of the circumference of the waist at the
                  level of the greatest protrusion of the gluteal muscles.
                </ListItemText>
              </ListItem>
            </List>
            <Typography variant="h5" component="h3">
              US Navy Tape Measurement Locations for Males
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="overline">Neck:</Typography> The neck
                  tape measurement consists of the circumference of the neck, in
                  the location immediately above the Adam’s apple.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="overline">Waist:</Typography> The waist
                  tape measurement consists of the circumference of the
                  narrowest waist level, which is located midway between the
                  lowest rib and the top of the hip bone.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default UsNavyGirthCalculatorPage;
