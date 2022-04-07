import { NextPage } from "next";
import Link from "next/link";

const BodyfatCalculators: NextPage = () => {
  return (
    <div>
      <p>Here are a list of bodyfat calculators.</p>
      <ul>
        <li>
          <Link href="/bodyfat-calculator/jackson-pollock-7-point">
            7 Point Jackson & Pollock Body Fat Calclator
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BodyfatCalculators;
