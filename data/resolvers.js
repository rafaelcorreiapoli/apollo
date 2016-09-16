import Author from './mongo/models/author'
import Post from './mongo/models/post'

const resolvers = {
  Query: {
    authors: (root, args) =>
      Author.find().exec(),
    author: (root, args) =>
      Author.findOne({
        firstName: args.firstName
      }).exec(),
  },
  Author: {
    posts(author){
      return Post.find({
        author: author
      }).exec()
    },
  },
  Post: {
    author: (post) => Author.findById(post.author).exec()
  },
};

export default resolvers;
