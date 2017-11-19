import axios from 'axios';


export default{  

    getTopArticles: function(){
        let nytURL = "https://api.nytimes.com/svc/topstories/v2/home.json";
        nytURL += `?api-key=617b6ee5aac34caa84bb4450a8430a44`;

        return axios.get(nytURL)
    },

    searchArticles: function(topic, startYear, endYear){
        
        let nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        nytURL += `?api-key=617b6ee5aac34caa84bb4450a8430a44`;
        nytURL += `&q=${topic}`
        if(startYear){
            nytURL += `&begin_date=${startYear}0101`;
        }
        if(endYear){
            nytURL += `&end_date=${endYear}1231`;
        }
        // nytURL += `&sort=oldest`

        return axios.get(nytURL)
    },

    saveArticle: function(data){
        return axios.post('/api/saved', data)
    },

    getSavedArticles: function(){
        return axios.get('/api/saved')
    },

    deleteArticle: function(id){
        return axios.delete('/api/saved/'+id)
    }
}