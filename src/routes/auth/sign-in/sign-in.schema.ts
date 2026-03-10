import z from "zod";

export const signInEmailSchema = z.object({
  email: z.email("Informe um email válido"),
  password: z.string("Informe uma senha"),
});

export type SignInEmail = z.infer<typeof signInEmailSchema>;
