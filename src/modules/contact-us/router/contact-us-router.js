import DefaultLayout from "../../../layouts/default-layout";
import ContactUs from "../pages/contact-us";

export const ContactUsRouter = [
  {
    path: "/contact-us",
    element: <DefaultLayout/>,
    children: [
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
];
