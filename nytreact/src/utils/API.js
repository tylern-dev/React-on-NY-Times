import axios from 'axios';

let nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

export default{
    getArticles: function() {
        return axios.get(nytURL);
    },

    searchArticles: function(topic, startYear, endYear){
        
        nytURL += `?api-key=617b6ee5aac34caa84bb4450a8430a44`
        nytURL += `&q=${topic}`
        nytURL += `&begin_date=${startYear}0101`
        nytURL += `&end_date=${endYear}1231`
        // nytURL += `&sort=oldest`

        return axios.get(nytURL)
    },

    saveArticle: function(data){
        axios.post('/api/saved' )
    }
}