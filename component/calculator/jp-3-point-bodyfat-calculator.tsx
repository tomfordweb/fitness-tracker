import { Formik } from "formik";
import { useState } from "react";
import { BASE_URL } from "../../lib/constant";
import { BodyfatResultCard } from "./bodyfat-result-card";
import { SharedJpBodyfatControls } from "./shared-jp-bodyfat-controls";
export const JacksonPollock3PointBodyfatCalculator = () => {
  const [formError, setFormError] = useState("");
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
          let url: URL;
          let submissionValues: Record<string, string>;
          if (values.gender === "female") {
            url = new URL(
              BASE_URL + "/api/calculator/jackson-pollock-3-point-female"
            );
            submissionValues = {
              tricep: values.tricep,
              thigh: values.thigh,
              suprailiac: values.suprailiac,
              age: values.age,
            };
          } else {
            url = new URL(
              BASE_URL + "/api/calculator/jackson-pollock-3-point-male"
            );
            submissionValues = {
              chest: values.chest,
              abdominal: values.abdominal,
              thigh: values.thigh,
              age: values.age,
            };
          }
          url.search = new URLSearchParams(submissionValues).toString();

          setFormError("");
          fetch(url.toString())
            .then((data) => data.json())
            .then((data) => {
              setSubmitting(false);
              if (data.ok === false) {
                setFormError("An API Error Occured.");
                return;
              }
              setBodyDensityFormula(data.bodyDensityFormula);
              setBodyDensity(data.bodyDensity);
              setBodyFatPercentageFormula(data.bodyFatFormula);
              setBodyFatPercentage(data.bodyFat);
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
      <BodyfatResultCard
        bodyFat={bodyFatPercentage}
        bodyFatFormula={bodyFatPercentageFormula}
        bodyDensity={bodyDensity}
        bodyDensityFormula={bodyDensityFormula}
      />
    </div>
  );
};
