import React from "react";
import Button from '@mui/material/Button';

export default function SmallBtn() {
  return (
    <>
    {/* Small Btn */}
      <Button variant="outlined" size="small" className="bmls_secondary_small_btn">
          Small
      </Button>
      <br/>
      <br/>
      {/* Small Btn with disabled state*/}
      <Button variant="outlined" size="small" className="bmls_secondary_small_btn" disabled>
        Small with disabled state
      </Button>
    </>
  );
}
