import { user } from "@prisma/client";

export interface contextType {
  req: { user: user };
  isAuthenticated: (req: any) => void;
}
