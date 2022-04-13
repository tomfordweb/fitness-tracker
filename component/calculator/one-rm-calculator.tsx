import { TextField, Button, Grid, Alert } from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BASE_URL } from "../../lib/constant";
import { OneRmCalculations } from "../../pages/strength-calculators/one-rep-max-calculator";

// source: https://www.athlegan.com/calculate-1rm
export const OneRmCalculator = (props: {
  onSuccess: (data: OneRmCalculations) => void;
}) => {
  const router = useRouter();
  const [formError, setFormError] = useState("");
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          weight: (router.query?.weight as string) || "",
          reps: (router.query?.reps as string) || "",
        }}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.weight) {
            errors.weight = "Required";
          }
          if (!values.reps) {
            errors.reps = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const url = new URL(BASE_URL + "/api/calculator/one-rep-max");

          setFormError("");

          setSubmitting(false);
          url.search = new URLSearchParams(values).toString();

          fetch(url.toString())
            .then((data) => data.json())
            .then((data) => {
              if (data.ok === false) {
                setFormError("An API Error Occured.");
              } else {
                props.onSuccess(data);
              }
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
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  className="form-control"
                  label="Weight"
                  sx={{ mb: 3, width: "100%" }}
                  id="weight"
                  name="weight"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weight}
                  error={touched.weight && Boolean(errors.weight)}
                  helperText={touched.weight && errors.weight}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="form-control"
                  label="Reps"
                  sx={{ mb: 3, width: "100%" }}
                  id="reps"
                  name="reps"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reps}
                  error={touched.reps && Boolean(errors.reps)}
                  helperText={touched.reps && errors.reps}
                />
              </Grid>
            </Grid>
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
