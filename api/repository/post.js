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

  async findPostsByTags(tags) {
    const [result] = await this.connection.query(
      `SELECT p.* FROM posts p
      JOIN users_choose_tags uct ON p.id_user = uct.id_user
      WHERE uct.id_tag IN (?)`,
      [tags]
    );
    return result;
  }
}



export default PostRepository;
