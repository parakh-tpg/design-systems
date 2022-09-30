import React from "react";
import CheckboxBasic from './CheckboxBasic'
import CheckboxWithLabel from './CHeckboxWithLabel'
export default function CheckboxInput() {
  return (
    <>
      <h1>Basic checkbox</h1>
      <br />
      <CheckboxBasic />
      <br />
      <h1>Checkbox with label</h1>
      <CheckboxWithLabel />
    </>
  );
}
