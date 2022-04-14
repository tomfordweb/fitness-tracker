import { TextField, Button, Alert } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import { BASE_URL } from "../../lib/constant";
import { ResultCard } from "../result-card";
import { GenderRadioOptions } from "./gender-radio-options";
export const UsNavyBodyfatCalculator = () => {
  const [formError, setFormError] = useState("");
  const [form, setFormValues] = useState({
    gender: "female",
    height: "",
    abdomen: "",
    neck: "",
    waist: "",
    hips: "",
  });

  const [bodyFatPercentage, setBodyFatPercentage] = useState(0);
  const [bodyFatPercentageFormula, setBodyFatPercentageFormula] = useState("");

  return (
    <div>
      <Formik
        initialValues={form}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.height) {
            errors.height = "Required";
          }
          if (!values.gender) {
            errors.gender = "Required";
          }
          if (!values.neck) {
            errors.neck = "Required";
          }
          if (values.gender === "female") {
            if (!values.hips) {
              errors.hips = "Required";
            }
            if (!values.waist) {
              errors.waist = "Required";
            }
          }
          if (values.gender === "male") {
            if (!values.abdomen) {
              errors.abdomen = "Required";
            }
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          let url: URL;
          let submissionValues: Record<string, string>;
          if (values.gender === "female") {
            url = new URL(BASE_URL + "/api/calculator/navy-bodyfat-female");
            submissionValues = {
              waist: values.waist,
              hips: values.hips,
              neck: values.neck,
              height: values.height,
            };
          } else {
            url = new URL(BASE_URL + "/api/calculator/navy-bodyfat-male");
            submissionValues = {
              abdomen: values.abdomen,
              neck: values.neck,
              height: values.height,
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
            <GenderRadioOptions
              handleChange={handleChange}
              value={values.gender}
            />
            <TextField
              className="form-control"
              sx={{ mb: 3 }}
              label="Height Measurement"
              id="height"
              name="height"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.height}
              error={touched.height && Boolean(errors.height)}
              helperText={touched.height && errors.height}
            />
            {values.gender === "female" && (
              <>
                <TextField
                  className="form-control"
                  label="Waist Measurement"
                  sx={{ mb: 3 }}
                  id="waist"
                  name="waist"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.waist}
                  error={touched.waist && Boolean(errors.waist)}
                  helperText={touched.waist && errors.waist}
                />
                <TextField
                  className="form-control"
                  label="Hips Measurement"
                  id="hips"
                  sx={{ mb: 3 }}
                  name="hips"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.hips}
                  error={touched.hips && Boolean(errors.hips)}
                  helperText={touched.hips && errors.hips}
                />
                <TextField
                  className="form-control"
                  label="Neck Measurement"
                  id="neck"
                  sx={{ mb: 3 }}
                  name="neck"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.neck}
                  error={touched.neck && Boolean(errors.neck)}
                  helperText={touched.neck && errors.neck}
                />
              </>
            )}
            {values.gender === "male" && (
              <>
                <TextField
                  className="form-control"
                  label="Abdomen Measurement"
                  id="abdomen"
                  name="abdomen"
                  type="number"
                  sx={{ mb: 3 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.abdomen}
                  error={touched.abdomen && Boolean(errors.abdomen)}
                  helperText={touched.abdomen && errors.abdomen}
                />
                <TextField
                  className="form-control"
                  label="Neck Measurement"
                  id="neck"
                  name="neck"
                  sx={{ mb: 3 }}
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.neck}
                  error={touched.neck && Boolean(errors.neck)}
                  helperText={touched.neck && errors.neck}
                />
              </>
            )}
            <Button
              variant="outlined"
              type="submit"
              fullWidth
              disabled={isSubmitting}
            >
              Submit
            </Button>
            {Boolean(formError.length) && (
              <Alert sx={{ mt: 3 }} severity="error">
                {formError}
              </Alert>
            )}
          </form>
        )}
      </Formik>
      <ResultCard
        title="Bodyfat"
        value={bodyFatPercentage}
        formula={bodyFatPercentageFormula}
      />
    </div>
  );
};
