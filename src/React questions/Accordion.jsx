import React, { useState } from "react";

function Accordion() {
  const [accor, setAccor] = useState(false);

  return (
    <div>
      <h2 onClick={() => setAccor(!accor)}> Hi iam Vigneshwaran </h2>
      {accor ? " iam trining my skills day by day " : " "}
    </div>
  );
}

export default Accordion;
