import type { UserWithRole } from "better-auth/plugins";

export interface User extends UserWithRole {
  role: "coordinator" | "librarian" | "assistant";
}
