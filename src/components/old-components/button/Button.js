import React from "react";
import Button from "@mui/material/Button";
import '../../../css/global_styles--old.scss'

export default function ButtonComponent() {
  return (
    <>
      {/* Primary button */}
      <Button className="bmls_primary_btn">
        Primary
      </Button>
      {/* Primary button with disabled state*/}
      <Button className="bmls_primary_btn" disabled>
        Primary Disabled
      </Button>
    </>
  );
}
