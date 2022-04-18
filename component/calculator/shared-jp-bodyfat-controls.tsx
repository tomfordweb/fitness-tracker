import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";
import { BodyfatMeasurementList } from "../bodyfat-measurement-list";
import { ResultCard } from "../result-card";
import { GenderRadioOptions } from "./gender-radio-options";

export interface Form {
  style: string | "3point" | "4point" | "7point";
  gender: string;
  age?: string;
  thigh?: string;
  chest?: string;
  midauxilary?: string;
  tricep?: string;
  subscapular?: string;
  abdominal?: string;
  suprailiac?: string;
}
export const SharedJpBodyfatControls = (props: {
  bodyDensity?: number;
  bodyFatPercentage?: number;
  bodyDensityFormula?: string;
  bodyFatPercentageFormula?: string;
  formError: string;
  handleChange: (e: ChangeEvent<any>) => void;
  // TODO: this should be FocusEvent<any> - type errors?
  handleBlur: (e: any) => void;
  isSubmitting: boolean;
  values: Form;
  touched: FormikTouched<Form>;
  errors: FormikErrors<Form>;
}) => {
  const imageSrc = (fields: Form) => {
    if (fields.style === "7point") {
      return "/7-point-bodyfat-pinch-sites.png";
    } else if (fields.style === "4point") {
      return "/4-point-bodyfat-pinch-sites.png";
    } else {
      return "/3-point-bodyfat-pinch-sites.png";
    }
  };
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{ flexDirection: "column", display: "flex" }}
        >
          <Typography sx={{ mb: 3 }}>
            All skinfold Measurements are to be taken on the right side of body.
            The muscle group that is being assessed should be relaxed. Wait one
            to two seconds after releasing the calipers, and take multiple
            measurements to find an average.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            The numbers on the inputs correspond with the descriptions and chart
            below
          </Typography>
          <GenderRadioOptions
            handleChange={props.handleChange}
            value={props.values.gender}
          />
          <TextField
            className="form-control"
            label="Age"
            id="age"
            InputProps={{ inputProps: { min: 1 } }}
            name="age"
            sx={{ mb: 3 }}
            type="number"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.age}
            error={props.touched.age && Boolean(props.errors.age)}
            helperText={props.touched.age && props.errors.age}
          />
          {(props.values?.style !== "3point" ||
            props.values.gender === "male") &&
            props.values?.style !== "4point" && (
              <TextField
                className="form-control"
                label="1: Chest Measurement"
                id="chest"
                name="chest"
                sx={{ mb: 3 }}
                type="number"
                InputProps={{ inputProps: { min: 1 } }}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.chest}
                error={props.touched.chest && Boolean(props.errors.chest)}
                helperText={props.touched.chest && props.errors.chest}
              />
            )}
          {props.values?.style !== "3point" &&
            props.values?.style !== "4point" && (
              <TextField
                className="form-control"
                label="2: Midauxilary Measurement"
                id="midauxilary"
                name="midauxilary"
                sx={{ mb: 3 }}
                InputProps={{ inputProps: { min: 1 } }}
                type="number"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.midauxilary}
                error={
                  props.touched.midauxilary && Boolean(props.errors.midauxilary)
                }
                helperText={
                  props.touched.midauxilary && props.errors.midauxilary
                }
              />
            )}
          {(props.values?.style !== "3point" ||
            props.values.gender === "female") && (
            <TextField
              className="form-control"
              label="3: Tricep Measurement"
              id="tricep"
              sx={{ mb: 3 }}
              name="tricep"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.tricep}
              error={props.touched.tricep && Boolean(props.errors.tricep)}
              helperText={props.touched.tricep && props.errors.tricep}
            />
          )}
          {props.values?.style !== "3point" &&
            props.values?.style !== "4point" && (
              <TextField
                label="4: Subscapular Measurement"
                className="form-control"
                id="subscapular"
                InputProps={{ inputProps: { min: 1 } }}
                sx={{ mb: 3 }}
                name="subscapular"
                type="number"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.subscapular}
                error={
                  props.touched.subscapular && Boolean(props.errors.subscapular)
                }
                helperText={
                  props.touched.subscapular && props.errors.subscapular
                }
              />
            )}
          {(props.values?.style !== "3point" ||
            props.values.gender === "male") && (
            <TextField
              label="5: Abdominal Measurement"
              id="abdominal"
              className="form-control"
              sx={{ mb: 3 }}
              name="abdominal"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.abdominal}
              error={props.touched.abdominal && Boolean(props.errors.abdominal)}
              helperText={props.touched.abdominal && props.errors.abdominal}
            />
          )}
          {(props.values?.style !== "3point" ||
            props.values.gender === "female") && (
            <TextField
              className="form-control"
              label="6: Suprailiac Measurement"
              id="suprailiac"
              name="suprailiac"
              type="number"
              sx={{ mb: 3 }}
              InputProps={{ inputProps: { min: 1 } }}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.suprailiac}
              error={
                props.touched.suprailiac && Boolean(props.errors.suprailiac)
              }
              helperText={props.touched.suprailiac && props.errors.suprailiac}
            />
          )}
          <TextField
            className="form-control"
            label="7: Thigh Measurement"
            id="thigh"
            name="thigh"
            type="number"
            sx={{ mb: 3 }}
            InputProps={{ inputProps: { min: 1 } }}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.thigh}
            error={props.touched.thigh && Boolean(props.errors.thigh)}
            helperText={props.touched.thigh && props.errors.thigh}
          />

          <Button
            variant="outlined"
            type="submit"
            fullWidth
            disabled={props.isSubmitting}
          >
            Submit
          </Button>

          {Boolean(props.formError.length) && (
            <Alert sx={{ mt: 3 }} severity="error">
              {props.formError}
            </Alert>
          )}
          <Grid sx={{ my: 3 }} container spacing={2}>
            <Grid item sm={6}>
              <ResultCard
                title="Body Density"
                value={props.bodyDensity || 0}
                formula={props.bodyDensityFormula}
              />
            </Grid>
            <Grid item sm={6}>
              <ResultCard
                title="Bodyfat"
                symbol="%"
                value={props.bodyFatPercentage || 0}
                formula={props.bodyFatPercentageFormula || ""}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Image width="1200" height="818" src={imageSrc(props.values)} />
          <BodyfatMeasurementList fields={props.values} />
        </Grid>
      </Grid>
    </Container>
  );
};
