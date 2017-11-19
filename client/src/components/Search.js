import React from 'react';
import API from '../utils/API';
import ArticleResults from '../components/ArticleResults';

export default class Search extends React.Component {
    state = {
        articles: [],
        topic: '',
        startYear:'',
        endYear:''
    }
    
    

    handleInputChange = (event) =>{
        const { name, value } = event.target;
        this.setState({ 
            [name]: value
        })
    }
    
    handleSubmit = (event) => {
        const {topic,startYear, endYear} = this.state;
        event.preventDefault();
        
        API.searchArticles(topic, startYear, endYear)
        .then(response =>{
            const articles = response.data.response.docs
            console.log('articles----------\n', articles)
            this.setState({
                articles: articles
            })
        })
        .catch(error => console.log(error))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="topic-field">Topic</label>
                        <input name="topic" className="form-control" type="text" id="topic-field" placeholder="Moon Landing" value={this.state.topic}  onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="start-field">Starting Year</label>
                        <input name="startYear" className="form-control" type="number" id="start-field" placeholder="i.e. 1969" value={this.state.startYear} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="endYear">Ending Year</label>
                        <input name="endYear" className="form-control" type="number" id="topic-field" placeholder="i.e. 1972" value={this.state.endYear} onChange={this.handleInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                </form>
                {this.state.articles.map(article => {
                    return <ArticleResults key={article._id} articleData={article} />
                })}
            </div>
        )
    }
}



