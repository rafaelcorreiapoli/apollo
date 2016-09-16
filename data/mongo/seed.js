import casual from 'casual'
import Author from './models/author'
import Post from './models/post'

export default () => {
  return
  casual.seed(123)
  Author.remove({}, (err, res) => {
    if (!err) console.log('All authors removed')
  })
  Post.remove({}, (err, res) => {
    if (!err) console.log('All posts removed')
  })


  for (let i = 0; i < casual.integer(0, 100); i++ ) {
    const newAuthor = new Author({
      firstName: casual.first_name,
      lastName: casual.last_name,
    })

    //newAuthor.save()

    const posts = []
    for (let j = 0; j < casual.integer(10, 20); j++) {
      const newPost = new Post({
        title: casual.title,
        text: casual.sentences(10),
        views: casual.integer(0, 1000),
        author: newAuthor
      })

      newPost.save()
      posts.push(newPost)
    }

    newAuthor.posts = posts;
    newAuthor.save()
  }

}

// for (i = 0; i < 100; i++ ) {
//
//
// }
