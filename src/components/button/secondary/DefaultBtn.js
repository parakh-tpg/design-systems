import React from "react";
import Button from '@mui/material/Button';

export default function DefaultBtn() {
  return (
    <>
    {/* Default Btn */}
      <Button variant="outlined" size="medium" className="bmls_secondary_default_btn">
          Default
      </Button>
      <br/>
      <br/>
      {/* Default Btn with disabled state*/}
      <Button variant="outlined" size="medium" className="bmls_secondary_default_btn" disabled>
          Default with disabled state
      </Button>
    </>
  );
}
