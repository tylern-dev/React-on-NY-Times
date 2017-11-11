import React, { Component } from 'react';
import ArticleResults from '../components/ArticleResults';
import Search from '../components/Search';

export default class SearchPage extends Component {
    state ={
        articles: []
    }

    handleArticle = (articles) => {
        // console.log(articles);
        this.setState({
            articles: articles
        })
        
    }

    render(){
        return(
            <div>
            <h1>SearchPage</h1>

            <Search callBackFromParent={this.handleArticle}/>
            {this.state.articles.map(article => <ArticleResults key={article._id} articleData={article}/>)}
            
            </div>
        )
    }
}