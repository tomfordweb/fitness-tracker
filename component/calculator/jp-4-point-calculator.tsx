import { Formik } from "formik";
import { useState } from "react";
import { pushToDatalayer } from "../../lib/utility";
import { SharedJpBodyfatControls } from "./shared-jp-bodyfat-controls";

export const JacksonPollock4PointBodyfatCalculator = () => {
  const [formError, setFormError] = useState("");

  const [bodyFatPercentage, setBodyFatPercentage] = useState(0);
  const [bodyFatPercentageFormula, setBodyFatPercentageFormula] = useState("");

  return (
    <>
      <Formik
        initialValues={{
          style: "4point",
          gender: "female",
          age: "",
          tricep: "",
          abdominal: "",
          suprailiac: "",
          thigh: "",
        }}
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
          if (!values.abdominal) {
            errors.abdominal = "Required";
          }
          if (!values.tricep) {
            errors.tricep = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const url = new URL(
            process.env.NEXT_PUBLIC_BASE_URL +
              "/api/calculator/jackson-pollock-4-point"
          );

          setFormError("");
          url.search = new URLSearchParams(values).toString();
          fetch(url.toString())
            .then((data) => data.json())
            .then((data) => {
              console.log(data);
              if (data.ok === false) {
                setFormError("An API Error Occured.");
                return;
              }
              pushToDatalayer({
                event: "formSubmission",
                formType: data.style,
                ...data,
                value: data.bodyFat,
              });
              setBodyFatPercentageFormula(data.bodyFatFormula);
              setBodyFatPercentage(data.bodyFat);
              setSubmitting(false);
            })
            .catch((error) => {
              setSubmitting(false);
            });
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
              bodyFatPercentage={bodyFatPercentage}
              bodyFatPercentageFormula={bodyFatPercentageFormula}
              formError={formError}
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
    </>
  );
};
