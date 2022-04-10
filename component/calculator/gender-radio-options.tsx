import {
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { ChangeEvent } from "react";
export const GenderRadioOptions = (props: {
  handleChange: (event: ChangeEvent<any>) => void;
  value: string;
}) => {
  return (
    <FormControl className="form-control">
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        onChange={props.handleChange}
        value={props.value}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};
