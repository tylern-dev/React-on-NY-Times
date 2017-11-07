import axios from 'axios';

let nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=617b6ee5aac34caa84bb4450a8430a44"

export default{
    getArticles: function() {
        return axios.get(nytURL);
    }
}