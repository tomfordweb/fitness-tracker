import { NextPage } from "next";
import Link from "next/link";
import { AppBreadcrumbs } from "../../component/breadcrumbs";

const BodyfatCalculators: NextPage = () => {
  return (
    <div>
      <AppBreadcrumbs />
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
