/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Feature from '../feature/Feature';
import './article.css';

const Article = ({ imgUrl, learn, web1, web2, web3, git1, git2, git3, text2, text1 }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{text1}</h3>
        <h4>{text2}</h4>
        <p>{git1}</p>
        <p>{git2}</p>
        <p>{git3}</p>
        <p>{web1}</p>
        <p>{web2}</p>
        <p>{web3}</p>
        <p>{learn}</p>
      </div>
      <Feature /><p>Learn More</p>
    </div>
  </div>
);

export default Article;
