import { Card, CardActions, CardContent, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import { SevenPointBodyFatCalculator } from "../component/calculator/jackson-pollock-bodyfat";

const Home: NextPage = () => {
  const cards = [
    {
      title: "Diet and Nutrition",
      cards: [
        {
          title: "Bodyfat Calculators",
          text: "Determine your body fat percentage using a variety of easy to use calculators!",
          links: [
            {
              href: "/bodyfat-calculator",
              text: "Calculate Bodyfat Percentage",
            },
          ],
        },
        {
          title: "TDEE and BMR Calculators",
          text: "Determine the calories needed to power your body",
          links: [
            {
              href: "",
              text: "Calculate BMR Now",
            },
          ],
        },
      ],
    },
    {
      title: "Lifting",
      cards: [
        {
          title: "1RM Calculator",
          text: "Do you even lift bro?",
          links: [
            {
              href: "",
              text: "What is my 1 RM?",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {cards.map((section) => (
        <>
          <Typography variant="h2" color="text.secondary">
            {section.title}
          </Typography>
          {section.cards.map((card) => (
            <Card variant="outlined" sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h5">{card.title}</Typography>
                <Typography color="text.secondary">{card.text}</Typography>
                <CardActions>
                  {card.links.map((link) => (
                    <Link href={link.href}>{link.text}</Link>
                  ))}
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </>
      ))}
    </>
  );
};

export default Home;
