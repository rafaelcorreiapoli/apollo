const typeDefinitions = `
type Post {
  id: String
  title: String
  text: String
  views: Int
  author: Author
}
type Author {
  id: String
  firstName: String
  lastName: String
  posts: [Post]
}
type Query {
  author(firstName: String, lastName: String): Author,
  authors: [Author],
  getFortuneCookie: String
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
