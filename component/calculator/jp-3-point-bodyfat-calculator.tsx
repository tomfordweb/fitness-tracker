import { Formik } from "formik";
import { useState } from "react";
import {
  calculateJacksonPollock3PointFemale,
  calculateJacksonPollock3PointMale,
} from "../../lib/calculators";
import { SharedJpBodyfatControls } from "./shared-jp-bodyfat-controls";
export const JacksonPollock3PointBodyfatCalculator = () => {
  const [form, setFormValues] = useState({
    gender: "female",
    style: "3point",
    age: "",
    chest: "",
    abdominal: "",
    tricep: "",
    suprailiac: "",
    thigh: "",
  });

  const [bodyFatPercentage, setBodyFatPercentage] = useState(0);
  const [bodyFatPercentageFormula, setBodyFatPercentageFormula] = useState("");
  const [bodyDensity, setBodyDensity] = useState(0);
  const [bodyDensityFormula, setBodyDensityFormula] = useState("");

  return (
    <div>
      <Formik
        initialValues={form}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.age) {
            errors.age = "Required";
          }
          if (!values.gender) {
            errors.gender = "Required";
          }
          if (values.gender === "female") {
            if (!values.suprailiac) {
              errors.suprailiac = "Required";
            }
            if (!values.thigh) {
              errors.thigh = "Required";
            }
            if (!values.tricep) {
              errors.tricep = "Required";
            }
          }
          if (values.gender === "male") {
            if (!values.thigh) {
              errors.thigh = "Required";
            }
            if (!values.abdominal) {
              errors.abdomen = "Required";
            }
            if (!values.chest) {
              errors.tricep = "Required";
            }
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          let data;
          if (values.gender === "female") {
            data = calculateJacksonPollock3PointFemale(values);
          } else {
            data = calculateJacksonPollock3PointMale(values);
          }
          setFormValues(values);
          setBodyDensityFormula(data.bodyDensityFormula);
          setBodyDensity(data.bodyDensity);
          setBodyFatPercentageFormula(data.bodyFatFormula);
          setBodyFatPercentage(data.bodyFat);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="form"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SharedJpBodyfatControls
              handleChange={handleChange}
              handleBlur={handleBlur}
              isSubmitting={isSubmitting}
              values={values}
              touched={touched}
              errors={errors}
            />
          </form>
        )}
      </Formik>
      <p>Your body density is: {bodyDensity}</p>
      <p>{bodyDensityFormula}</p>
      <p>Your body fat percentage is: {bodyFatPercentage}</p>
      <p>{bodyFatPercentageFormula}</p>
    </div>
  );
};
