import axios from 'axios';


export default{  

    searchArticles: function(topic, startYear, endYear){
        
        let nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
        nytURL += `?api-key=617b6ee5aac34caa84bb4450a8430a44`
        nytURL += `&q=${topic}`
        if(startYear){
            nytURL += `&begin_date=${startYear}0101`
        }
        if(endYear){
            nytURL += `&end_date=${endYear}1231`
        }
        // nytURL += `&sort=oldest`

        return axios.get(nytURL)
    },

    saveArticle: function(data){
        return axios.post('/api/saved', data)
    }
}