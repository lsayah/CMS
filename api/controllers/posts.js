import getConnection from "../connection.js";
import PostRepository from "../repository/post.js";
import TagRepository from "../repository/tags.js";
import { uploadProfilPicture } from "../routes/middleware.js";

export async function postArticle(req, res) {
  const connection = await getConnection();
  const postRepository = new PostRepository(connection);
  const tagRepository = new TagRepository(connection);
  try {
    const { id } = req.auth;
    const body = req.body;

    if (req.file) {
      body.picture = `/pictures/${req.file.filename}`;
    }

    const idPost = await postRepository.createPost({ ...body, id_user: id });
    tagRepository.savePostTags(body.tags, idPost);

    res.status(201).json({
      success: true,
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
