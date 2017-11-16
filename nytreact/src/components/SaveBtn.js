import React, { Component } from 'react';
import API from '../utils/API';
export default class SaveBtn extends Component {
  saveArticle = () => {
    
  }
  render(){
    return(
      <button onClick={this.saveArticle} className="btn btn-primary">Save Article</button>
    )
  }
}