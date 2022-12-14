import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function TextInput() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
    </Box>
  );
}
