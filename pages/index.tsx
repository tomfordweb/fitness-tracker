import type { NextPage } from "next";
import Link from "next/link";
import { SevenPointBodyFatCalculator } from "../component/calculator/jackson-pollock-bodyfat";

const Home: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/bodyfat-calculator">Bodyfat Calculators</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
