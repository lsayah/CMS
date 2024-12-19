class PostRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async createPost(post) {
    const [result] = await this.connection.query(
      `INSERT INTO posts 
      (title, content, pictures,  id_user) 
      VALUES (?, ?, ?, ?)`,
      [post.title, post.content, post.pictures, post.id_user]
    );
    return result.insertId;
  }
}

export default PostRepository;
