import React from "react";
import Button from "@mui/material/Button";

export default function DefaultBtn() {
  return (
    <>
      {/* Default Btn */}
      <Button variant="text" className="bmls_tertiary_default_btn">
        Default
      </Button>
      {/* Default Btn with disabled state*/}
      <Button variant="text" className="bmls_tertiary_default_btn" disabled>
        Default with disabled state
      </Button>
    </>
  );
}
