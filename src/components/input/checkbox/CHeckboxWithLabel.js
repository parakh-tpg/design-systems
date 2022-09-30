import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxWithLabel() {
  return (
    <FormGroup style={{ display: "flex" }}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Label"
        style={{ justifyContent: "center" }}
      />
      <FormControlLabel
        disabled
        control={<Checkbox />}
        label="Disabled"
        style={{ justifyContent: "center" }}
      />
    </FormGroup>
  );
}
