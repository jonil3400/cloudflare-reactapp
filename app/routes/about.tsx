import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "About" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
    
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function About({ loaderData }: Route.ComponentProps) {
  return <></>;
}
