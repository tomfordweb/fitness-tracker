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
import {
  calculateUsNavyBodyfatCalculatorFemale,
  calculateUsNavyBodyfatCalculatorMale,
} from "../../lib/calculators";
import { GenderRadioOptions } from "./gender-radio-options";
export const UsNavyBodyfatCalculator = () => {
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
          const data =
            values.gender === "female"
              ? calculateUsNavyBodyfatCalculatorFemale({
                  waist: parseInt(values.waist),
                  hips: parseInt(values.hips),
                  neck: parseInt(values.neck),
                  height: parseInt(values.height),
                })
              : calculateUsNavyBodyfatCalculatorMale({
                  abdomen: parseInt(values.abdomen),
                  neck: parseInt(values.neck),
                  height: parseInt(values.height),
                });

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
          </form>
        )}
      </Formik>
      <p>Your body fat percentage is: {bodyFatPercentage}</p>
      <p>{bodyFatPercentageFormula}</p>
    </div>
  );
};
