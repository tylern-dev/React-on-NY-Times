import React from 'react';
import styled from 'styled-components';
import SaveBtn from './SaveBtn';


const TopStoriesCard = (props) => (
    <div>
        <CardStyled className="card col ">
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title">{props.headline}</h4>
                <p className="card-text">{props.snippet} <a href={props.url}>Read More</a></p>
                <SaveBtn saveArticleData={props.saveArticleData} />
            </div>
        </CardStyled>
    </div>
)

export default TopStoriesCard;

const CardStyled = styled.div`
    width: 30rem;
    margin-right: 10px;
    margin-bottom: 20px;
`;