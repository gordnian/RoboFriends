import React from "react";

const Scroll = ({ children }) => {
  return <div style={{ overflowY: "scroll", height: "90vh" }}>{children}</div>;
};

export default Scroll;
