import DefaultLayout from "../../../layouts/default-layout";
import InfographicsDetails from "../pages/details";
import InfographicsListing from "../pages/listing";

export const InfographicsRouter = [
  {
    path: "/infographics",
    element: <DefaultLayout/>,
    children: [
      { path: "/infographics", element: <InfographicsListing /> },
      { path: "details/:slug", element: <InfographicsDetails /> },
    ],
  },
];
