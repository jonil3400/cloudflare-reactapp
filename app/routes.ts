import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    index("routes/home.tsx"),
    route("projects", "routes/projects.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
