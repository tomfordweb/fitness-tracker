import { Formik } from "formik";
import { useState } from "react";
import { calculateJacksonPollock4Point } from "../../lib/calculators";
import { SharedJpBodyfatControls } from "./shared-jp-bodyfat-controls";

export const JacksonPollock4PointBodyfatCalculator = () => {
  const [form, setFormValues] = useState({
    style: "4point",
    gender: "female",
    age: "",

    tricep: "",
    abdomen: "",
    suprailiac: "",
    thigh: "",
  });

  const [bodyFatPercentage, setBodyFatPercentage] = useState(0);
  const [bodyFatPercentageFormula, setBodyFatPercentageFormula] = useState("");

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
          if (!values.thigh) {
            errors.thigh = "Required";
          }
          if (!values.suprailiac) {
            errors.suprailiac = "Required";
          }
          if (!values.abdomen) {
            errors.abdomen = "Required";
          }
          if (!values.tricep) {
            errors.tricep = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const data = calculateJacksonPollock4Point(values);
          setFormValues(values);
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
      <p>Your body fat percentage is: {bodyFatPercentage}</p>
      <p>{bodyFatPercentageFormula}</p>
    </div>
  );
};
