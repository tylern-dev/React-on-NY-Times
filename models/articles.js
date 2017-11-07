const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type: String
    },
    pub_date: {
        type: String
    },
    url:{
        type: String
    }
});

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;