import React, { Component } from 'react';
import API from '../utils/API';

import TopStoriesCard from '../components/TopStoriesCard';

export default class TopStories extends Component {
    state = {
        articles: []
    }
    componentDidMount(){
        this.loadArticles();
    }

    loadArticles = () => {
        API.getTopArticles()
            .then(result => {
                // console.log(result)
                this.setState({
                    articles: result.data.results
                })

            }
            )
            .catch(error => console.log(error))
    }

    render(){
        let mapSize = this.props.limit;
        return(
            <div>
                {this.props.pageTitle
                    ? <h1>{this.props.pageTitle}</h1>
                    : <h1>Top Stories</h1>
                }
                
                <div className="row justify-content-center">
                    {this.state.articles.slice(0,mapSize).map(article => {
                        return article.multimedia.map(pic =>{
                            if(pic.format === 'superJumbo'){
                                return <TopStoriesCard key={article.short_url} img={pic.url} headline={article.title} snippet={article.abstract} url={article.short_url} saveArticleData={article}/>
                            }
                        })
                        //  console.log(article.multimedia);
                        // <TopStoriesCard img={article.multimedia[1].url} />

                    })}
                </div>
            </div>
        )
    }
}