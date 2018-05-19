const mongoose = require('mongoose')
const Schema = mongoose.Schema

//const{mongoose,Schema}=require('../services/mongoose_service')
const ArticleSchema = new Schema({
  acfunId: {
    type: String
  },
  content: {
    type: String
  },
  articleContentHtml: {
    type: String
  },
  createAt: {
    type: Number,
    default: Date.now().valueOf()
  },
  originCreateAt: {
    type: Number
  },
  title: {
    type: String
  },
  tags: [{
    name: {
      type: String
    },
    value: {
      type: String
    },
    score: {
      type: String
    }
  }]
})

const articleModel = mongoose.model('article', ArticleSchema);

module.exports = {
  model: articleModel
}