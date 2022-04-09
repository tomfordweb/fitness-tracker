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
  calculateBasalMetabolicRate,
  calculateJacksonPollock3PointFemale,
  calculateJacksonPollock3PointMale,
} from "../../lib/calculators";
export const BasalMetabolicRateCalculator = () => {
  const [form, setFormValues] = useState({
    gender: "female",
    age: "",
    height: "",
    weight: "",
  });

  const [bmr, setBmr] = useState({
    value: 0,
    formula: "",
  });

  return (
    <div>
      <Formik
        initialValues={form}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.age) {
            errors.age = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const data = calculateBasalMetabolicRate({
            gender: values.gender,
            age: parseInt(values.age),
            heightInCentimeters: parseInt(values.height),
            weightInKilograms: parseInt(values.weight),
          });
          setFormValues(values);
          setBmr(data);
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
            <FormControl className="form-control">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                onChange={handleChange}
                value={values.gender}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
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
          </form>
        )}
      </Formik>
      <p>Your Basal Metabolic Rate is {bmr.value}</p>
      <p>{bmr.formula}</p>
    </div>
  );
};
