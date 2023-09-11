import DefaultLayout from "../../../layouts/default-layout";
import CategoriesListing from "../pages/listing";

export const CategoriesRouter = [
  {
    path: "/categories-listing",
    element: <DefaultLayout/>,
    children: [
      { path: "/categories-listing", element: <CategoriesListing /> },
    ],
  },
];
