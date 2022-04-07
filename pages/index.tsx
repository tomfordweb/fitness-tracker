import { Card, CardActions, CardContent, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import { CALCULATORS } from "../lib/constant";

const Home: NextPage = () => {
  const cards = CALCULATORS;
  return (
    <section>
      <header>
        <Typography variant="h1">
          The best fitness calculators online
        </Typography>
        <Typography>
          Browse our selection of fitness and health calculators
        </Typography>
      </header>
      <article>
        {cards.map((section) => (
          <>
            <Typography variant="h2" color="text.secondary">
              {section.category}
            </Typography>
            {section.groups.map((card) => (
              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h5">{card.title}</Typography>
                  <Typography color="text.secondary">
                    {card.description}
                  </Typography>
                  <Link href={card.href}>{card.linkText}</Link>
                  <CardActions>
                    {card.calculators.map((link) => (
                      <Link href={link.href}>{link.linkText}</Link>
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
