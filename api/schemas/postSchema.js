// Schemas/postSchema.js
import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string({
      required_error: "Le titre est requis",
    })
    .trim()
    .min(3, "Le titre doit contenir au moins 3 caractères"),

  content: z
    .string({
      required_error: "Le contenu est requis",
    })
    .trim()
    .min(10, "Le contenu doit contenir au moins 10 caractères"),

  tags: z.array(z.number()).min(1, "selectionner au moins une tag"),
});
