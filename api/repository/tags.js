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
}

export default TagRepository;
