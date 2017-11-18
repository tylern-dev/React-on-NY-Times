import React from 'react';
import styled from 'styled-components';
import SaveBtn from './SaveBtn';



const ArticleResults = ({articleData}) => (
      
        <ArticleWrapper>
          <h2>{articleData.headline.main}</h2>
          <p>Publication Date:{articleData.pub_date}</p>
          <p>{articleData.snippet} <a href={articleData.web_url}>Read More</a></p>
          <SaveBtn key={articleData.id} saveArticleData={articleData} />
        </ArticleWrapper>

)

export default ArticleResults;


const ArticleWrapper = styled.div`
  background-color: #33333;
  
  margin-bottom: 20px;
  padding: 10px;
`;