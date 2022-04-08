import {
  Radio,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  CardContent,
  Typography,
  CardActions,
  Card,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";

const OneRmCard = (props: { value: number; formula: string; name: string }) => (
  <Card>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.name}
      </Typography>
      <Typography variant="body2">{props.value}</Typography>
      <Typography variant="body1">{props.formula}</Typography>
    </CardContent>
  </Card>
);
// source: https://www.athlegan.com/calculate-1rm
export const OneRmCalculator = () => {
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
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          const weight = parseInt(values.weight);
          const reps = parseInt(values.reps);

          const oneRms = {
            brzycki: {
              value: weight * (36 / (37 - reps)),
              formula: `${values.weight} * (36 / ( 37 ${values.reps}))`,
            },
            oconner: {
              value: weight * (1 + 0.025 * reps),
              formula: `${values.weight} * (1. 0.025 + ${values.reps})`,
            },
            mayhew: {
              value: (100 * weight) / (52.2 + 41.9 * (Math.E - 0.055) * reps),
              formula: `100 * ${values.weight} / (52.2 + (41.9 * ${
                Math.E - 0.055
              } * ${values.reps}))`,
            },
            lombardi: {
              value: Math.pow(weight * reps, 0.1),
              formula: `${values.weight} * ${values.reps} ^ 0.1`,
            },
            lander: {
              value: (100 * weight) / (101.4 - 2.67123 * reps),
              formula: `(100 * ${weight}) / (101.4 - 2.67123 * ${reps})`,
            },
            wathan: {
              value: (100 * weight) / (46.8 + 53.8 * Math.exp(-0.075) * reps),
              formula: `(100 * ${weight}) / (46.8 + (53.8 * ${Math.exp(
                -0.075
              )}* ${reps}))`,
            },
            epley: {
              value: weight * (1 + 0.0333 * reps),
              formula: `${weight} * (1 + 0.0333 * ${reps})`,
            },
          };
          setOneRms(oneRms);
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
            <TextField
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
              className="form-control"
              label="Reps"
              id="reps"
              name="reps"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.reps}
              error={touched.reps && Boolean(errors.reps)}
              helperText={touched.reps && errors.reps}
            />
            <Button
              variant="outlined"
              type="submit"
              fullWidth
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
      <OneRmCard {...oneRms.brzycki} name="Brzycki" />
      <OneRmCard {...oneRms.epley} name="Epley" />
      <OneRmCard {...oneRms.lander} name="Lander" />
      <OneRmCard {...oneRms.mayhew} name="Mayhew" />
      <OneRmCard {...oneRms.wathan} name="Wathan" />
      <OneRmCard {...oneRms.oconner} name="O'Connor" />
      <OneRmCard {...oneRms.lombardi} name="Lombardi" />
    </div>
  );
};
