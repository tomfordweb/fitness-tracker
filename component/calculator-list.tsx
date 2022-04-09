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
          <Link href={calculator.href}>{calculator.linkText}</Link>
        </li>
      ))}
    </ul>
  );
};
