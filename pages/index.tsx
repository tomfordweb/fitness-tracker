import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Link from "../component/link";
import { CALCULATORS } from "../lib/constant";

const Home: NextPage = () => {
  const cards = CALCULATORS;
  return (
    <section>
      <header>
        <Typography component="h1" variant="h3">
          The Best Fitness Calculators Online
        </Typography>
        <Typography variant="subtitle1">
          Browse Our Selection Of Fitness, Health and Nutrition calculators
        </Typography>
      </header>
      <article>
        <p>
          Monitoring your fitness is essential to living a healthy and happy
          life. Use our efficient calculators to track and monitor your fitness.
        </p>
      </article>
      <article>
        {cards.map((section) => (
          <>
            <Typography variant="h2" color="text.secondary">
              {section.category}
            </Typography>
            {section.groups.map((card, i) => (
              <Card key={i} variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h5">
                    <Link href={card.href}>{card.title}</Link>
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
          </>
        ))}
      </article>
    </section>
  );
};

export default Home;
