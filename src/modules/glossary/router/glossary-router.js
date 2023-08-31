import DefaultLayout from "../../../layouts/default-layout";
import GlossaryDetails from "../pages/details";
import GlossaryListing from "../pages/listing";

export const GlossaryRouter = [
  {
    path: "/glossary",
    element: <DefaultLayout/>,
    children: [
      { path: "/glossary", element: <GlossaryListing /> },
      { path: "details/:slug", element: <GlossaryDetails /> },
    ],
  },
];
