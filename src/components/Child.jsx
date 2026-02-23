import React, { useEffect } from "react";

function Child({ data }) {
  useEffect(() => {
    console.log("Child component", data);
  });

  return <div>Child</div>;
}

export default React.memo(Child);
