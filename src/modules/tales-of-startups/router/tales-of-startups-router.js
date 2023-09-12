import DefaultLayout from "../../../layouts/default-layout";
import TalesOfStartupsDetails from "../pages/details";
import TalesOfStartupsListing from "../pages/listing";
import CategoriesListing from '../pages/tos-categories';

export const TalesOfStartupsRouter = [
  {
    path: "/tales-of-startups",
    element: <DefaultLayout/>,
    children: [
      { path: "/tales-of-startups", element: <TalesOfStartupsListing /> },
      { path: "details/:slug", element: <TalesOfStartupsDetails /> },
      { path: "category", element: <CategoriesListing/> },
    ],
  },
];
