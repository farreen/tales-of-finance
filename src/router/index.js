import NotFound from "../common/components/not-found";
import { BlogRouter } from "../modules/blogs/router/blog-router";
import { ContactUsRouter } from "../modules/contact-us/router/contact-us-router";
import { GlossaryRouter } from "../modules/glossary/router/glossary-router";
import { HomePageRouter } from "../modules/home/router/home-router";
import { InfographicsRouter } from "../modules/infographics/router/infographics-router";
import { TalesOfStartupsRouter } from "../modules/tales-of-startups/router/tales-of-startups-router";

export const IndexRouter = [
  { path: "*", element: <NotFound /> },
  ...HomePageRouter,
  ...BlogRouter,
  ...InfographicsRouter,
  ...GlossaryRouter,
  ...ContactUsRouter,
  ...TalesOfStartupsRouter,
];
