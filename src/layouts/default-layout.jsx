import React, { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../common/components/nav-bar";
import { Container } from "react-bootstrap";
import Footer from "../common/components/footer";

const DefaultLayout = ({ props }) => {
  console.log("props", props);
  return (
    <>
      <NavigationBar />
      <div className="w-100" style={{ top: "100px", position: "absolute" }}>
        <div className="h-100">
          <Suspense fallback={<p>Loading.....</p>}>
            <Outlet></Outlet>
          </Suspense>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default memo(DefaultLayout);
