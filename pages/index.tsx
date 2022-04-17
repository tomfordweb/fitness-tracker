import {
  Card,
  Box,
  CardActions,
  CardContent,
  Chip,
  Typography,
  Container,
  Grid,
  Paper,
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
        h1="Health and Fitness Calculators"
        caption="Easy to use tools to monitor body composition and fitness progress."
      />
      <Container maxWidth="sm" sx={{ mt: 5 }} component="section">
        {cards.map((card, i) => (
          <Paper sx={{ mb: 5 }}>
            <Box key={i}>
              <Card key={i} variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography sx={{ my: 1 }} component="h2" variant="h5">
                    {card.href.length > 0 ? (
                      <Link href={card.href}>{card.title}</Link>
                    ) : (
                      card.title
                    )}
                  </Typography>
                  <Typography sx={{ mb: 3 }} color="text.secondary">
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
            </Box>
          </Paper>
        ))}
      </Container>
    </>
  );
};

export default Home;
