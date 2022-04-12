import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Alert,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { calculateOneRepMax } from "../../lib/calculators";
import { BASE_URL } from "../../lib/constant";

const OneRmCard = (props: { value: number; formula: string; name: string }) => (
  <Paper
    sx={{
      mb: 3,
      p: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <Typography variant="h3">
      {props.value}
      <Typography variant="overline">Lbs</Typography>
    </Typography>
    <Typography
      sx={{ fontSize: 14 }}
      variant="overline"
      color="text.secondary"
      gutterBottom
    >
      {props.name}
    </Typography>
    <Typography variant="caption">{props.formula}</Typography>
  </Paper>
);
// source: https://www.athlegan.com/calculate-1rm
export const OneRmCalculator = () => {
  const [formError, setFormError] = useState("");
  const [form, setFormValues] = useState({
    weight: "",
    reps: "",
  });

  const [oneRms, setOneRms] = useState({
    brzycki: {
      value: 0,
      formula: "",
    },
    oconner: {
      value: 0,
      formula: "",
    },
    mayhew: {
      value: 0,
      formula: "",
    },
    lombardi: {
      value: 0,
      formula: "",
    },
    lander: {
      value: 0,
      formula: "",
    },
    wathan: {
      value: 0,
      formula: "",
    },
    epley: {
      value: 0,
      formula: "",
    },
  });

  return (
    <div>
      <Formik
        initialValues={form}
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
        onSubmit={(values, { setErrors, setSubmitting }) => {
          const url = new URL(BASE_URL + "/api/calculator/one-rep-max");

          setFormError("");

          url.search = new URLSearchParams(values).toString();
          fetch(url.toString())
            .then((data) => data.json())
            .then((data) => {
              console.log(data);

              setSubmitting(false);
              if (data.ok === false) {
                setFormError("An API Error Occured.");
              } else {
                setOneRms(data);
              }
            })
            .catch((error) => {
              console.log("caught error");
              console.error(error.json());
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
      <Grid sx={{ mt: 3 }} container spacing={2}>
        <Grid item xs={3}>
          <OneRmCard {...oneRms.brzycki} name="Brzycki" />
        </Grid>
        <Grid item xs={3}>
          <OneRmCard {...oneRms.epley} name="Epley" />
        </Grid>
        <Grid item xs={3}>
          <OneRmCard {...oneRms.lander} name="Lander" />
        </Grid>
        <Grid item xs={3}>
          <OneRmCard {...oneRms.mayhew} name="Mayhew" />
        </Grid>
        <Grid item xs={3}>
          <OneRmCard {...oneRms.wathan} name="Wathan" />
        </Grid>
        <Grid item xs={3}>
          <OneRmCard {...oneRms.oconner} name="O'Connor" />
        </Grid>
        <Grid item xs={3}>
          <OneRmCard {...oneRms.lombardi} name="Lombardi" />
        </Grid>
      </Grid>
    </div>
  );
};
