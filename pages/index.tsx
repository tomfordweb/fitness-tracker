import {
  Card,
  Box,
  CardActions,
  CardContent,
  Chip,
  Typography,
  Container,
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
        <article>
          <p>
            Monitoring your fitness is essential to living a healthy and happy
            life. Use our efficient calculators to track and monitor your
            fitness.
          </p>
        </article>
        <article>
          {cards.map((section, i) => (
            <Box component="div" key={i}>
              <Typography variant="h2" color="text.secondary">
                {section.category}
              </Typography>
              {section.groups.map((card, i) => (
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
                    <CardActions>
                      {card.calculators.map((link, i) => (
                        <Chip
                          key={i}
                          component={Link}
                          clickable
                          label={link.linkText}
                          href={link.href}
                        ></Chip>
                      ))}
                    </CardActions>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ))}
        </article>
      </Container>
    </>
  );
};

export default Home;
