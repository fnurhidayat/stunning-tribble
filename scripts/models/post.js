class Post extends Record {
  static attributes = [
    "id",
    "title",
    "body",
    "userId",
    "createdAt",
    "updatedAt",
  ];

  getUser() {
    return User.find(this.userId);
  }
}
