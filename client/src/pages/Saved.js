import React, { Component } from 'react';
import ArticleResults from '../components/ArticleResults';
import API from '../utils/API';

export default class Saved extends Component {
    state = {
        articles: []
    }
    
    componentDidMount(){
        this.loadArticles();
    }
    
    loadArticles = () => {
        API.getSavedArticles()
            .then(response => {
                this.setState({
                    articles: response.data
                })
            })
            .catch(error => console.log('error', error))
        
    }
    
    render(){
        return(
            <div>
                <h1>Saved Articles</h1>
                {this.state.articles.map(article => {
                    return <ArticleResults key={article._id} articleData={article} onArticleDelete={this.loadArticles} />
                })}
            </div>
        )
    }
}