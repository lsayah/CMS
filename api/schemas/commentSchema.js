import { z } from "zod";

export const commentSchema = z.object({
    postId: z
      .number({
        required_error: "L'ID de l'article est requis",
      })
      .int()
      .positive(),
    content: z
      .string({
        required_error: "Le contenu du commentaire est requis",
      })
      .trim()
      .min(1, "Le contenu du commentaire ne peut pas être vide"),
    id_comment_parent: z
      .number()
      .int()
      .positive()
      .optional(),
  });