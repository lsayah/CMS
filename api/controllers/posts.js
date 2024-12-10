const connection = require("../connection");
exports.createArticle = async (req, res) => {
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
};
