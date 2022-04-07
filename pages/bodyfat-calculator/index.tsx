import { NextPage } from "next";
import Link from "../../component/link";
import { BODYFAT_CALCULATORS, CALCULATORS } from "../../lib/constant";

const BodyfatCalculators: NextPage = () => {
  const calculators = BODYFAT_CALCULATORS;
  return (
    <div>
      <p>Here are a list of bodyfat calculators.</p>
      <ul>
        {calculators.map((calculator) => (
          <li>
            <Link href={calculator.href}>{calculator.linkText}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BodyfatCalculators;
