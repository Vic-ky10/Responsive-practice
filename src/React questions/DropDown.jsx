import React, { useState } from "react";

function DropDown() {
  const options = ["HTML", "CSS", "JavaScript", "React"];

  const [select, setSelect] = useState("");

  return (
    <div>
      <select onChange={(e) => setSelect(e.target.value)}>
        <option value="">select One</option>

        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <h2>selected course : {select}</h2>
    </div>
  );
}

export default DropDown;
