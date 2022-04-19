import { TextField, Button, Alert } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { GenderRadioOptions } from "./gender-radio-options";
export const BasalMetabolicRateCalculator = (props: {
  handleFormUpdate: (props: { value: number; formula: string }) => void;
}) => {
  const [formError, setFormError] = useState("");
  const [form, setFormValues] = useState({
    gender: "female",
    age: "",
    height: "",
    weight: "",
  });

  const [bmr, setBmr] = useState<{
    value: number;
    formula: string;
  } | null>(null);

  const [tdee, setTdee] = useState<{
    activityLevel: string;
    data: { value: number; multiplier: number; label: string }[];
  }>({ activityLevel: "", data: [] });

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
          if (!values.height) {
            errors.height = "Required";
          }
          if (!values.weight) {
            errors.weight = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const url = new URL(
            process.env.NEXT_PUBLIC_BASE_URL +
              "/api/calculator/basal-metabolic-rate"
          );

          setFormError("");
          url.search = new URLSearchParams(values).toString();
          fetch(url.toString())
            .then((data) => data.json())
            .then((data) => {
              if (data.ok === false) {
                setFormError("An API Error Occured.");
                return;
              }
              props.handleFormUpdate(data);
              setBmr(data);
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
            <GenderRadioOptions
              handleChange={handleChange}
              value={values.gender}
            />
            <TextField
              sx={{ mb: 3 }}
              className="form-control"
              label="Age"
              id="age"
              name="age"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              error={touched.age && Boolean(errors.age)}
              helperText={touched.age && errors.age}
            />
            <TextField
              sx={{ mb: 3 }}
              className="form-control"
              label="Weight"
              id="weight"
              name="weight"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.weight}
              error={touched.weight && Boolean(errors.weight)}
              helperText={touched.weight && errors.weight}
            />
            <TextField
              sx={{ mb: 3 }}
              className="form-control"
              label="Height"
              id="heightInCentimeters"
              name="height"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.height}
              error={touched.height && Boolean(errors.height)}
              helperText={touched.height && errors.height}
            />
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
    </div>
  );
};
