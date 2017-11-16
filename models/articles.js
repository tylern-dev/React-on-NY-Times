const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    headline: {
        type: String
    },
    snippet: {
        type: String
    },
    url:{
        type: String
    },
    saved:{
        type: Boolean
    }
});

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;