import DefaultLayout from "../../../layouts/default-layout";
import TalesOfStartupsDetails from "../pages/details";
import TalesOfStartupsListing from "../pages/listing";

export const TalesOfStartupsRouter = [
  {
    path: "/tales-of-startups",
    element: <DefaultLayout/>,
    children: [
      { path: "/tales-of-startups", element: <TalesOfStartupsListing /> },
      { path: "details/:slug", element: <TalesOfStartupsDetails /> },
    ],
  },
];
