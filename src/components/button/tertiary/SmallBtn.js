import React from "react";
import Button from '@mui/material/Button';

export default function SmallBtn() {
  return (
    <>
    {/* Small Btn */}
      <Button variant="text" size="small" className="bmls_tertiary_small_btn">
          Small
      </Button>
      {/* Small Btn with disabled state*/}
      <Button variant="text" size="medium" className="bmls_tertiary_small_btn" disabled>
        Small with disabled state
      </Button>
    </>
  );
}
