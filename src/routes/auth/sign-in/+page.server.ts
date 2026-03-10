import { superValidate } from "sveltekit-superforms";
import { zod4 } from "sveltekit-superforms/adapters";
import { signInEmailSchema } from "./sign-in.schema";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod4(signInEmailSchema)),
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod4(signInEmailSchema));

    if (!form.valid) return fail(400, { form });

    // lógica de autenticação...

    return { form };
  },
};
