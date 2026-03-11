import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod4 } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types";
import { signInEmailSchema } from "./sign-in.schema";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod4(signInEmailSchema)),
    title: "Entrar",
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod4(signInEmailSchema));

    if (!form.valid) return fail(400, { form });

    return { form };
  },
};
