import { NextPage } from "next";
import {
  UsNavyBodyfatCalculator,
  UsNavyGirthCalculator,
} from "../../component/calculator/us-navy-girth";

const UsNavyGirthCalculatorPage: NextPage = () => {
  return (
    <div>
      <h3>US Navy Tape Measurement Locations for Males</h3>

      <ul>
        <li>
          Neck: The neck tape measurement consists of the circumference of the
          neck, in the location immediately above the Adam’s apple.
        </li>
        <li>
          Waist: The waist tape measurement consists of the circumference of the
          narrowest waist level, which is located midway between the lowest rib
          and the top of the hip bone.
        </li>
      </ul>

      <h3>US Navy Tape Measurement Locations for Females</h3>

      <ul>
        <li>
          Neck: The neck tape measurement consists of the circumference of the
          neck, in the location immediately above the Adam’s apple.
        </li>
        <li>
          Waist: The waist tape measurement consists of the circumference of the
          narrowest waist level, which is located midway between the lowest rib
          and the top of the hip bone.
        </li>
        <li>
          Hip: The hip tape measurement consists of the circumference of the
          waist at the level of the greatest protrusion of the gluteal muscles.
        </li>
      </ul>
      <UsNavyBodyfatCalculator />
    </div>
  );
};
export default UsNavyGirthCalculatorPage;
