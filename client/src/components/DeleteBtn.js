import React, { Component } from 'react';
import API from '../utils/API';


export default class DeleteBtn extends Component {
  
  deleteArticle = () => {
    console.log('Deleted----', this.props.deleteArticleData)

    API.deleteArticle(this.props.deleteArticleData._id)
      .then(response => {
        console.log(response)
        
      })
      .catch(error => {
        console.log(error)
      })
      
      this.props.onArticleDelete(); // this fn is passed in from saved.js

  }
  render(){
    return(
      <button onClick={this.deleteArticle} className="btn btn-danger">Delete Article</button>
    )
  }
}