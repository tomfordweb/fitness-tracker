import {
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { CalculatorList } from "../../component/calculator-list";
import { PageTitle } from "../../component/page-title";
import { BODYFAT_CALCULATORS } from "../../lib/constant";
import { CalculatorLink } from "../../lib/interface";

const WhyCard = (props: {
  xs: number;
  sm: number;
  title: string;
  description: string;
}) => {
  return (
    <Grid item xs={props.xs} sm={props.sm}>
      <Paper>
        <Card>
          <Box
            sx={{ bgcolor: "secondary.main", height: "150px", width: "100%" }}
          />
          <CardContent>
            <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
              {props.title}
            </Typography>
            <Typography>{props.description}</Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};
const BodyfatCalculators: NextPage = () => {
  const calculators: CalculatorLink[] = BODYFAT_CALCULATORS;
  const whycards = [
    {
      xs: 12,
      sm: 4,
      title: "Not all pounds are the same",
      description:
        "Overweight means an excess of total body weight based on population averages for heights and body frame sizes. Athletes and very muscular people may be overweight, but that does not mean they are over fat. Obesity means an excess of body fat regardless of weight.",
    },
    {
      xs: 12,
      sm: 4,
      title: "Important to measuring fitness",
      description:
        " Weight alone is not a clear indicator of good health because it does not distinguish between pounds that come from body fat and those that come from lean body mass or muscle. Carrying too much fat is a condition called obesity, and puts a person at risk for many serious medical conditions including heart disease, diabetes and even certain forms of cancer. In fact, obesity contributes to at least half the chronic diseases in western society. ",
    },
    {
      xs: 12,
      sm: 4,
      title: "Appearances can be deceiving",
      description:
        "Men A, B and C are exactly the same height. A and B have the same weight, and C weighs considerably more. For his height C appears to be fat. But after analyzing body fat levels, B and C have acceptable percentages while A has above the recommended range and is at a higher health risk.",
    },
  ];

  return (
    <>
      <PageTitle
        h1="Bodyfat Calculators"
        caption="Determine how healthy you are with these convenient bodyfat calculators"
      />
      <Container component="section">
        <Typography align="center" variant="h2" component="h2">
          Why measure body fat?
        </Typography>
        <Box component="article">
          <Grid container spacing={2}>
            {whycards.map((card, i) => (
              <WhyCard key={i} {...card} />
            ))}
          </Grid>
        </Box>
        <Box component="article">
          <CalculatorList calculators={calculators} />
        </Box>
      </Container>
    </>
  );
};

export default BodyfatCalculators;
