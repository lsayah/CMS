import getConnection from "../connection.js";
import PostRepository from "../repository/post.js";
import TagRepository from "../repository/tags.js";

export async function postArticle(req, res) {
  const connection = await getConnection();
  const postRepository = new PostRepository(connection);
  const tagRepository = new TagRepository(connection);
  try {
    const { id } = req.auth;
    const body = req.body;

    if (req.file) {
      body.Picture = `/pictures/${req.file.filename}`;
    }

    const idPost = await postRepository.createPost({ ...body, id_user: id });
    tagRepository.savePostTags(body.tags.split(",").map(Number), idPost);

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

export async function getPostsByTags(req, res) {
  const connection = await getConnection();
  const postRepository = new PostRepository(connection);
  try {
    const { tags, query } = req.query;
    let posts;

    if (query) {
      posts = await postRepository.findPostsByQuery(query);
    } else if (tags) {
      const tagsArray = tags.split(",");
      posts = await postRepository.findPostsByTags(tagsArray);
    } else {
      return res.status(400).json({
        success: false,
        message: "Either tags or query parameter is required",
      });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

