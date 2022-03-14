const fikri = User.create({
  email: "fnurhidayat@binar.co.id",
  password: "123456",
});

const jokowi = User.create({
  email: "jokowi@indonesia.gov.id",
  password: "123456",
});

const obama = User.create({
  email: "obama@yemen.gov.us",
  password: "123456",
});

const ted = User.create({
  email: "ted@unabomber.ac.us",
  password: "123456",
});

const post = Post.create({
  title: "Industrial Society and Its Future",
  body: "The Industrial Revolution and its consequences have been a disaster for the human race. They have greatly increased the life-expectancy of those of us who live in “advanced” countries, but they have destabilized society, have made life unfulfilling, have subjected human beings to indignities, have led to widespread psychological suffering (in the Third World to physical suffering as well) and have inflicted severe damage on the natural world. The continued development of technology will worsen the situation. It will certainly subject human beings to greater indignities and inflict greater damage on the natural world, it will probably lead to greater social disruption and psychological suffering, and it may lead to increased physical suffering even in “advanced” countries.",
  userId: ted.id,
});

console.log("Obama, Jokowi, and Fikri", obama, jokowi, fikri);
console.log("User.findAll()", User.findAll());
console.log("User.find(1)", User.find(1));
console.log("User.destroy(1)", User.destroy(1));
console.log("User.findAll()", User.findAll());
console.log("post", post);
console.log("post.getUser()", post.getUser());
console.log("ted.getPosts()", ted.getPosts());
