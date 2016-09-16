import mongoose, { Schema } from 'mongoose'

const authorSchema = Schema({
  firstName: String,
  lastName: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});
const Author = mongoose.model('Author', authorSchema)

export default Author
