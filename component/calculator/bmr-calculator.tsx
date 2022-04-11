import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import { calculateBasalMetabolicRate } from "../../lib/calculators";
import { GenderRadioOptions } from "./gender-radio-options";
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
          </form>
        )}
      </Formik>
      <p>Your Basal Metabolic Rate is {bmr.value}</p>
      <p>{bmr.formula}</p>
    </div>
  );
};
