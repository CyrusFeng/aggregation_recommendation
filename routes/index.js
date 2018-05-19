var express = require('express');
var router = express.Router();

const Article = require('../models/article')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/spiderProtocol', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({
    code: 0,
    protocol: {
      name: 'FULL_NET_SPIDER_PROTOCOL',
      version: '0.1'
    },
    config: {
      contentList: {
        url: 'https:localhost:3000/content',
        pageSizeLimit: 20,
        frequencyLimit: 5
      }
    }
  })
});

router.get('/content', function (req, res, next) {
  (async function (params) {
    const {
      pageSize,
      latestId
    } = req.query;

    const match = {}

    if (latestId) {
      match._id = {$gte:latestId};
    }

    const articles = await Article.model.find(match)
    .sort({
      _id: 1
    }).limit(Number(pageSize) || 10)

    const contentList = [];

    for (let a of articles) {
      contentList.push({
        title:a.title,
        contentType:'dom',
        content:{
          html:a.articleContentHtml,
          text:a.articleContent
        },
        tags:a.tags,
        contentId:a._id,
      })
    }

    return {
      contentList
    }
  })().then(r=>{
    res.json(r)
  }).catch(e=>{
    console.log(e)
  })
});

module.exports = router;