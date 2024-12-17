import { z } from "zod";

export const createUserSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(6),
  tags: z.preprocess(
    (value) => value.split(",").map(Number),
    z.array(z.number()).min(1)
  ),
  Picture: z.string().optional(),
});
