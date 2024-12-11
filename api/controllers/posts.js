import getConnection from "../connection.js";
import PostRepository from "../repository/post.js";

export async function postArticle(req, res) {
  const connection = await getConnection();
  const postRepository = new PostRepository(connection);
  try {
    const {id} = req.auth;
    const body = req.body;
    postRepository.createPost({...body, auth_id});
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
