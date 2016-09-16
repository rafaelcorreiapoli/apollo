import mongoose from 'mongoose'
const db = mongoose.connection;
import seed from './seed'
import Author from './models/author'

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise
console.log('connecting...')
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
  seed()
});
