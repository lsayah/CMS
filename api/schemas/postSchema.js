// Schemas/postSchema.js
import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string({
      required_error: "Le titre est requis",
    })
    .trim()
    .min(3, "Le titre doit contenir au moins 3 caractères"),

  Picture: z.string().optional(),
  content: z
    .string({
      required_error: "Le contenu est requis",
    })
    .trim()
    .min(10, "Le contenu doit contenir au moins 10 caractères"),

    tags: z.preprocess(
      (value) => value.split(",").map(Number),
      z.array(z.number()).min(1)
    ),
});
