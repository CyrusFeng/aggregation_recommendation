const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const ObjectId = Schema.Types.ObjectId;
//const ObjectId = mongoose.Types.ObjectId;

const uri = 'mongodb://localhost:27017/ac_article_spider';
mongoose.connect(uri);
const db = mongoose.connection;

db.on('open',()=>{
  console.log('db connected')
})
db.on('error',(e)=>{
  console.log(e);
})

module.exports = {db};