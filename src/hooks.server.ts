import { authService } from "@src/shared/services/auth.service";
import { redirect, type Handle } from "@sveltejs/kit";

const PUBLIC_ROUTES = ["/", "/auth/sign-in", "/register"];

export const handle: Handle = async ({ event, resolve }) => {
  const authState = await authService.getSession();

  event.locals.user = authState?.user ?? null;
  event.locals.session = authState?.session ?? null;

  const pathname = event.url.pathname;
  const isPublic = PUBLIC_ROUTES.some((route) => pathname.startsWith(route));

  if (!isPublic && !event.locals.user) {
    redirect(303, "/auth/sign-in");
  }

  return resolve(event);
};
