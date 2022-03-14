class User extends Record {
  static attributes = ["id", "email", "password", "createdAt", "updatedAt"];

  getPosts() {
    return Post.findAll().filter((i) => i.userId === this.id);
  }
}
