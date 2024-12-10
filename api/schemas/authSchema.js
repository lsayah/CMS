// Schemas/postSchema.js
import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string({
      required_error: "L'email est requis",
    })
    .trim()
    .email("L'email n'est pas valide"),
  
    password: z
    .string({
      required_error: "Le mot de passe est requis",
    })
    .trim()
    .min(1)
});