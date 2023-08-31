import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const App = ({ children }) => {
  console.log("children", children);
  return <div className="App">{children}</div>;
};

export default withErrorBoundary(App);
