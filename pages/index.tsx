import {
  Card,
  Box,
  CardActions,
  CardContent,
  Chip,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import type { NextPage } from "next";
import Link from "../component/link";
import { PageTitle } from "../component/page-title";
import { CALCULATORS } from "../lib/constant";

const Home: NextPage = () => {
  const cards = CALCULATORS;
  return (
    <>
      <PageTitle
        caption="Browse Our Selection Of Fitness, Health and Nutrition calculators"
        h1="The Best Fitness Calculators Online"
      />
      <Container component="section">
        <Box component="div">
          <Typography>
            Monitoring your fitness is essential to living a healthy and happy
            life. Use our efficient calculators to track and monitor your
            fitness.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {cards.map((card, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Card key={i} variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h5">
                    {card.href.length > 0 ? (
                      <Link href={card.href}>{card.title}</Link>
                    ) : (
                      card.title
                    )}
                  </Typography>
                  <Typography color="text.secondary">
                    {card.description}
                  </Typography>
                  {card.calculators.map((link, i) => (
                    <Chip
                      key={i}
                      sx={{ mb: 1, mr: 1 }}
                      component={Link}
                      clickable
                      label={link.linkText}
                      href={link.href}
                    ></Chip>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
