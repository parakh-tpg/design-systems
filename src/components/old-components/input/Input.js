import React from "react";
import '../../../css/global_styles-old.scss'
export default function InputComponent() {
  return (
    <>
      {/* Default */}
      <label className="bmls_label">Default label</label>
      <input type="text" className="bmls_input" placeholder="placeholder"/>

      {/* Default with icon */}
      <label className="bmls_label">Default label with icon</label>
      <input type="text" className="bmls_input" placeholder="placeholder" icon="true"/>

      {/* No label default */}
      <input type="text" className="bmls_input" placeholder="placeholder"/>

      {/* No label with icon */}
      <input type="text" className="bmls_input" placeholder="placeholder" icon="true"/>
    </>
  );
}
