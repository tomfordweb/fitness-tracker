import { Card, CardContent, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ResultCard = (props: {
  title: string;
  value?: number | string;
  symbol?: string;
  formula?: string;
  active?: boolean;
}) => {
  if (!props.value) {
    return <></>;
  }
  return (
    <Paper>
      <Card
        raised={props?.active || false}
        sx={{ bgcolor: props?.active ? "secondary.light" : null }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Typography variant="h3" component="div">
              {typeof props.value === "number"
                ? props.value.toFixed(2)
                : props.value}
            </Typography>
            {props.symbol && (
              <Typography sx={{ ml: 1 }} variant="h4">
                {props.symbol}
              </Typography>
            )}
          </Box>
          <Typography variant="caption" component="div">
            {props.formula}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
