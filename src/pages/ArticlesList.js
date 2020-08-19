import React from 'react';
import { Link } from 'react-router-dom';
import articleContent from './article-content';
import articles from './article-content';

const ArticlesList = () => (
  <>
    <hi>Articles</hi>   
    {articleContent.map((article, key ) => (
      <Link className="article-list-item" key ={key} to={`/article/${article.name}`}> 
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
 
     ))}
  </>
);

export default ArticlesList;