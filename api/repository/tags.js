class TagRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async saveUserFavorite(idUser, tagsId) {
    const value = tagsId.map((tagId) => [idUser, tagId]);
    const [result] = await this.connection.query(
      `INSERT INTO users_choose_tags (id_user, id_tag) VALUES ?`,
      [value]
    );
    return result.insertId;
  }

  async savePostTags(tagsId, idPost) { 
    console.log(tagsId);
    const value = tagsId.map((tagId) => [idPost, tagId]);
    const [result] = await this.connection.query(
      `INSERT INTO posts_contain_tags (id_post, id_tag) VALUES ?`,
      [value]
    );
    return result.insertId;
  }

  async getAllTags() {
    const [rows] = await this.connection.query("SELECT * FROM tags ORDER BY name ASC");
    return rows;  
  }
}


export default TagRepository;
