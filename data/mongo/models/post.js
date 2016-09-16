import mongoose, { Schema } from 'mongoose'

const postSchema = Schema({
  title: String,
  text: String,
  views: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
})


const Post = mongoose.model('Post', postSchema)
export default Post
