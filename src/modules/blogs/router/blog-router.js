import DefaultLayout from "../../../layouts/default-layout";
import BlogDetails from "../pages/details";
import BlogListing from "../pages/listing";

export const BlogRouter = [
  {
    path: "/blogs",
    element: <DefaultLayout/>,
    children: [
      { path: "/blogs", element: <BlogListing /> },
      { path: "details/:slug", element: <BlogDetails /> },
    ],
  },
];
