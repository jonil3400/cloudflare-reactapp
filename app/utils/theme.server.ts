import { createCookie } from "react-router";

export function getThemeCookie(secret: string) {
  return createCookie("theme", {
    maxAge: 60 * 60 * 24 * 365,
    secrets: [secret],
  });
}

export async function getTheme(request: Request, secret: string) {
  const cookie = getThemeCookie(secret);
  const value = await cookie.parse(request.headers.get("Cookie"));
  return value === "dark" ? "dark" : "light";
}
