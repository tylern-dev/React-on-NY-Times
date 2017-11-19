import React, { Component } from 'react';
import API from '../utils/API';


export default class SaveBtn extends Component {
  state = {

  }
  saveArticle = () => {
    console.log('Saved----', this.props.saveArticleData)

    API.saveArticle(this.props.saveArticleData)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  render(){
    return(
      <button onClick={this.saveArticle} className="btn btn-primary">Save Article</button>
    )
  }
}