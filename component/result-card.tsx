import { Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

export const ResultCard = (props: {
  title: string;
  value?: number | string;
  formula?: string;
  active?: boolean;
}) => {
  if (!props.value) {
    return <></>;
  }
  return (
    <Card
      raised={props?.active || false}
      sx={{ bgcolor: props?.active ? "secondary.light" : null }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h3" component="div">
          {typeof props.value === "number"
            ? props.value.toFixed(2)
            : props.value}
        </Typography>
        <Typography variant="caption" component="div">
          {props.formula}
        </Typography>
      </CardContent>
    </Card>
  );
};
