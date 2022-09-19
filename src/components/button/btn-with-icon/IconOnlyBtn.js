import React from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

export default function IconOnlyBtn() {
  return (
    <>
      {/* Default Icon only Btn */}
      <IconButton className="bmls_icon_only_default_btn">
        <SettingsIcon />
      </IconButton>
      <br />
      <br />
      {/* Small Icon only Btn */}
      <IconButton className="bmls_icon_only_small_btn">
        <SettingsIcon />
      </IconButton>
    </>
  );
}
