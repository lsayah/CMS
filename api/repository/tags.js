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

  async savePostTags(tags, idPost) {
    const value = tags.map((tagId) => [idPost, tagId]);
    const [result] = await this.connection.query(
      `INSERT INTO posts_contain_tags (id_post, id_tag) VALUES ?`,
      [value]
    );
    return result.insertId;
  }
}


export default TagRepository;
