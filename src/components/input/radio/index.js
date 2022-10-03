import React from "react";
import RadioButtonsGroup from "./RadioButtonsGroup";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";
import ControlledRadioButtonsGroup from "./ControlledRadioButtonsGroup";
import RadioButtons from "./RadioButtons";
export default function RadioInput() {
  return (
    <>
      <h1>Radio group</h1>
      <br />
      <RadioButtonsGroup />
      <br />
      <h1>Radio button with horizontal direction</h1>
      <RowRadioButtonsGroup />
      <br />
      <h1>Controlled Radio Buttons</h1>
      <ControlledRadioButtonsGroup />
      <br />
      <h1>Standalone radio buttons</h1>
      <RadioButtons />
      <br />
      <br />
    </>
  );
}
