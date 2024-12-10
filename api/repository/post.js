class PostRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async createPost(post) {
    const [result] = await this.connection.query(
      `INSERT INTO post 
      (title, description, pictues,  id_user) 
      VALUES (?, ?, ?, ?)`,
      [post.title, post.description, post.picture, post.user_id]
    );
    return result.insertId;
  }
}

module.exports = PostRepository;
