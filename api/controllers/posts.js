import getConnection from "../connection.js";

export async function createArticle(req, res) {
  const connection = getConnection();
  const postRepository = new PostRepository(connection);
  try {
    const body = req.body;
    postRepository.createPost(body);
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
