import {
  Radio,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import { calculateJacksonPollock7Point } from "../../lib/calculators";
import { GenderRadioOptions } from "./gender-radio-options";
export const SevenPointBodyFatCalculator = () => {
  const [form, setFormValues] = useState({
    gender: "female",
    age: "",
    chest: "",
    midaxilar: "",
    tricep: "",
    subscapular: "",
    abdominal: "",
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
          if (!values.thigh) {
            errors.thigh = "Required";
          }
          if (!values.suprailiac) {
            errors.suprailiac = "Required";
          }
          if (!values.abdominal) {
            errors.abdominal = "Required";
          }
          if (!values.subscapular) {
            errors.subscapular = "Required";
          }
          if (!values.tricep) {
            errors.tricep = "Required";
          }
          if (!values.midaxilar) {
            errors.midaxilar = "Required";
          }
          if (!values.chest) {
            errors.chest = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const data = calculateJacksonPollock7Point(values);
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
            <GenderRadioOptions
              handleChange={handleChange}
              value={values.gender}
            />
            <TextField
              className="form-control"
              label="Age"
              id="age"
              InputProps={{ inputProps: { min: 1 } }}
              name="age"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              error={touched.age && Boolean(errors.age)}
              helperText={touched.age && errors.age}
            />
            <TextField
              className="form-control"
              label="Tricep Measurement"
              id="tricep"
              name="tricep"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tricep}
              error={touched.tricep && Boolean(errors.tricep)}
              helperText={touched.tricep && errors.tricep}
            />
            <TextField
              className="form-control"
              label="Chest Measurement"
              id="chest"
              name="chest"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.chest}
              error={touched.chest && Boolean(errors.chest)}
              helperText={touched.chest && errors.chest}
            />
            <TextField
              label="Subscapular Measurement"
              className="form-control"
              id="subscapular"
              InputProps={{ inputProps: { min: 1 } }}
              name="subscapular"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subscapular}
              error={touched.subscapular && Boolean(errors.subscapular)}
              helperText={touched.subscapular && errors.subscapular}
            />
            <TextField
              className="form-control"
              label="Mixaxilar Measurement"
              id="midaxilar"
              name="midaxilar"
              InputProps={{ inputProps: { min: 1 } }}
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.midaxilar}
              error={touched.midaxilar && Boolean(errors.midaxilar)}
              helperText={touched.midaxilar && errors.midaxilar}
            />
            <TextField
              label="Abdominal Measurement"
              id="abdominal"
              className="form-control"
              name="abdominal"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.abdominal}
              error={touched.abdominal && Boolean(errors.abdominal)}
              helperText={touched.abdominal && errors.abdominal}
            />
            <TextField
              className="form-control"
              label="Suprailiac Measurement"
              id="suprailiac"
              name="suprailiac"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.suprailiac}
              error={touched.suprailiac && Boolean(errors.suprailiac)}
              helperText={touched.suprailiac && errors.suprailiac}
            />
            <TextField
              className="form-control"
              label="Thigh Measurement"
              id="thigh"
              name="thigh"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.thigh}
              error={touched.thigh && Boolean(errors.thigh)}
              helperText={touched.thigh && errors.thigh}
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
      <p>Your body density is: {bodyDensity}</p>
      <p>{bodyDensityFormula}</p>
      <p>Your body fat percentage is: {bodyFatPercentage}</p>
      <p>{bodyFatPercentageFormula}</p>
    </div>
  );
};
