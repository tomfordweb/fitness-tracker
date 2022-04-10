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
import { calculateJacksonPollock4Point } from "../../lib/calculators";
import { GenderRadioOptions } from "./gender-radio-options";

export const JacksonPollock4PointBodyfatCalculator = () => {
  const [form, setFormValues] = useState({
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
            <GenderRadioOptions
              handleChange={handleChange}
              value={values.gender}
            />
            <TextField
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
              className="form-control"
              label="Tricep Measurement"
              id="tricep"
              name="tricep"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tricep}
              error={touched.tricep && Boolean(errors.tricep)}
              helperText={touched.tricep && errors.tricep}
            />
            <TextField
              label="Abdominal Measurement"
              id="abdomen"
              className="form-control"
              name="abdomen"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.abdomen}
              error={touched.abdomen && Boolean(errors.abdomen)}
              helperText={touched.abdomen && errors.abdomen}
            />
            <TextField
              className="form-control"
              label="Suprailiac Measurement"
              id="suprailiac"
              name="suprailiac"
              type="number"
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
      <p>Your body fat percentage is: {bodyFatPercentage}</p>
      <p>{bodyFatPercentageFormula}</p>
    </div>
  );
};
