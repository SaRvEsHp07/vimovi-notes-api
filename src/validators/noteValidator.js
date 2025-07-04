const { z } = require("zod");

const noteSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

module.exports = { noteSchema };
