import {
  Radio,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";
import Link from "../link";
import { Formik } from "formik";
import { useState } from "react";
import { Box } from "@mui/system";
export const TdeeCalculator = () => {
  const [form, setFormValues] = useState({
    activityLevel: "",
    bmr: "",
  });

  const [tdee, setTdee] = useState(0);

  return (
    <div>
      <Formik
        initialValues={form}
        validate={(values) => {
          const errors: Record<string, string> = {};
          console.log(values);
          if (!values.activityLevel) {
            errors.activityLevel = "Required";
          }
          if (!values.bmr) {
            errors.bmr = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTdee(parseFloat(values.activityLevel) * parseFloat(values.bmr));
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
            <FormControl sx={{ mb: 3 }} className="form-control">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Activity Level
              </FormLabel>
              <RadioGroup
                onChange={handleChange}
                value={values.activityLevel}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="activityLevel"
              >
                <FormControlLabel
                  value="1.2"
                  control={<Radio />}
                  label="Sedentary - little to no exercise, desk job"
                />
                <FormControlLabel
                  value="1.375"
                  control={<Radio />}
                  label="Lightly Active - Light exercise / sports 1-3 days per week."
                />
                <FormControlLabel
                  value="1.55"
                  control={<Radio />}
                  label="Moderately Active - Moderate Exercise / sports 6-7 days per week."
                />
                <FormControlLabel
                  value="1.725"
                  control={<Radio />}
                  label="Very Active - Hard Exercise daily, moderate exercise twice a day"
                />
                <FormControlLabel
                  value="1.9"
                  control={<Radio />}
                  label="Extra Active - Hard exercise 2 or more times a day."
                />
              </RadioGroup>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                mb: 3,
                alignItems: "center",
              }}
            >
              <Box sx={{ flexGrow: 1, mr: 3 }}>
                <TextField
                  sx={{ width: "100%", m: 0 }}
                  className="form-control"
                  label="Basal Metabolic Rate"
                  InputProps={{ inputProps: { min: 1 } }}
                  id="bmr"
                  name="bmr"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bmr}
                  error={touched.bmr && Boolean(errors.bmr)}
                  helperText={touched.bmr && errors.bmr}
                />
              </Box>
              <Link href="/nutrition-calculators/basal-metabolic-rate">
                How do I calculate my BMR?
              </Link>
            </Box>
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
      <p>Your TDEE is {tdee}</p>
    </div>
  );
};
