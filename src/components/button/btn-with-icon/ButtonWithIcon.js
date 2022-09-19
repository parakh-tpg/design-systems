import React from "react";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";

export default function ButtonWithIcon() {
  return (
    <>
        {/* Default Button with icon */}
      <Button
        variant="contained"
        startIcon={<SettingsIcon />}
        className="bmls_default_btn_with_icon"
      >
        Button with icon
      </Button>
      {/* Small Button with icon */}
      <Button
        variant="contained"
        startIcon={<SettingsIcon />}
        className="bmls_small_btn_with_icon"
      >
        Button with icon
      </Button>
    </>
  );
}
