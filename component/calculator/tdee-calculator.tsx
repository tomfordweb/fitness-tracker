import {
  Radio,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Grid,
  Alert,
} from "@mui/material";
import Link from "../link";
import { Formik } from "formik";
import { useState } from "react";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { BASE_URL, TDEE_ACTIVITY_LEVELS } from "../../lib/constant";
export const TdeeCalculator = (props: {
  onSubmit: (props: {
    activityLevel: string;
    data: { value: number; multiplier: number; label: string }[];
  }) => void;
}) => {
  const [formError, setFormError] = useState("");
  const router = useRouter();

  const [tdee, setTdee] = useState([]);
  const [multiplier, setMultiplier] = useState("");

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          activityLevel: "",
          bmr: (router.query?.bmr as string) || "",
        }}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.activityLevel) {
            errors.activityLevel = "Required";
          }
          if (!values.bmr) {
            errors.bmr = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setFormError("");
          setMultiplier(values.activityLevel);
          const url = new URL(
            BASE_URL + "/api/calculator/total-daily-energy-expenditure"
          );
          url.search = new URLSearchParams({ bmr: values.bmr }).toString();
          fetch(url.toString())
            .then((data) => data.json())
            .then((data) => {
              setSubmitting(false);
              if (data.ok === false) {
                setFormError("An API Error Occured.");
                return;
              }
              props.onSubmit({
                data,
                activityLevel: values.activityLevel,
              });
              setTdee(data);
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
                {TDEE_ACTIVITY_LEVELS.map((activityLevel, i) => (
                  <FormControlLabel
                    key={i}
                    value={activityLevel.multiplier.toString()}
                    control={<Radio />}
                    label={activityLevel.label}
                  />
                ))}
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
