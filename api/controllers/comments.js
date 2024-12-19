import getConnection from "../connection.js";
import CommentRepository from "../repository/comment.js";

export async function postComment(req, res) {
  const connection = await getConnection();
  const commentRepository = new CommentRepository(connection);
  try {
    const { id } = req.auth;
    const { id_post, content, id_comment_parent } = req.body;

    const commentId = await commentRepository.createComment({
   ...req.body,
      userId: id,
    });

    res.status(201).json({
      success: true,
      data: { id: commentId, id_post, content, id_comment_parent },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

export async function getCommentsByPostId(req, res) {
  const connection = await getConnection();
  const commentRepository = new CommentRepository(connection);
  try {
    const { postId } = req.params;
    const comments = await commentRepository.getCommentsByPostId(postId);
    res.status(200).json({
      success: true,
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  } }