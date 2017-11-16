import React from 'react';
import API from '../utils/API';

class Articles extends React.Component {
    state = {
        
    }
    

    loadArticles = () => {
        API.getArticles()
            .then( response => console.log(response.data.response.docs))
            .catch( error => console.log(error))
    }

    componentDidMount(){
        this.loadArticles();
    }

    render() {
        return(
            <h1>test</h1>

        )
    }

}

export default Articles;