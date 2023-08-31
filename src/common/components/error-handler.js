// import React from "react";

// const ErrorHandler = ({ error }) => {
//   console.log("error", error);
//   return (
//     <>
//       <div>ErrorHandler</div>
//       <pre>{error.message}</pre>
//     </>
//   );
// };

// export default ErrorHandler;

import React, { useState } from 'react';

function withErrorBoundary(WrappedComponent) {
  return function ErrorBoundary(props) {
    const [error, setError] = useState(null);
  
    if (error) {
      return <div>An error occurred: {error.toString()}</div>;
    }
  
    try {
      return <WrappedComponent {...props} />;
    } catch (err) {
      setError(err);
    }
  }
}

export default withErrorBoundary;