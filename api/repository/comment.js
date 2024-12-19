class CommentRepository {
    constructor(connection) {
      this.connection = connection;
    }
  
    async createComment(comment) {
      const [result] = await this.connection.query(
        `INSERT INTO comments 
        (id_users, id_post, content, id_comment_parent) 
        VALUES (?, ?, ?, ?)`,
        [comment.userId, comment.postId, comment.content, comment.parentCommentId]
      );
      return result.insertId;
    }
  }
  
  export default CommentRepository;