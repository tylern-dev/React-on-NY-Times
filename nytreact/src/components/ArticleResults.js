import React from 'react';
import styled from 'styled-components';
import SaveBtn from './SaveBtn';
import DeleteBtn from './DeleteBtn';



const ArticleResults = (props) => (
        
        <ArticleWrapper>
          { props.articleData.headline.main
            ? <h2>{props.articleData.headline.main}</h2>
            : <h2>{props.articleData.headline}</h2> }

          {!props.articleData.pub_date ? '' :  <p>Publication Date:{props.articleData.pub_date}</p> }
          <p>{props.articleData.snippet} <a href={props.articleData.web_url}>Read More</a></p>
          
          { props.articleData.saved
            ? <DeleteBtn key={props.articleData._id} deleteArticleData={props.articleData} onArticleDelete={props.onArticleDelete}/>
            : <SaveBtn key={props.articleData.id} saveArticleData={props.articleData} /> }
          
        </ArticleWrapper>

)

export default ArticleResults;


const ArticleWrapper = styled.div`
  background-color: #33333;
  
  margin-bottom: 20px;
  padding: 10px;
`;