// Schemas/postSchema.js
const { z } = require("zod");

exports.postSchema = z.object({
  
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
});
