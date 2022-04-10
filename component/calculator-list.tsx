import { Typography } from "@mui/material";
import Link from "./link";

export const CalculatorList = (props: {
  calculators: {
    href: string;
    linkText: string;
  }[];
}) => {
  return (
    <ul>
      {props.calculators.map((calculator) => (
        <li>
          <Typography>
            <Link href={calculator.href}>{calculator.linkText}</Link>
          </Typography>
        </li>
      ))}
    </ul>
  );
};
