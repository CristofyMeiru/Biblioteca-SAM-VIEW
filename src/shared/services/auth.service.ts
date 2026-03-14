import { auth } from "@src/lib/auth";
import type { Session } from "better-auth";
import type { User } from "../types/auth.types";

export const authService = {
  async getSession() {
    // const { data, error } = await auth.getSession();
    // if (error) throw error;
    return {} as { session: Session; user: User };
  },
};
