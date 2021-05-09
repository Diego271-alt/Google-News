import React, { useState, useEffect } from "react";

import "./styles/heroStyles.css";
export default function HeroNews(props) {
  const [article, setArticle] = useState({});
  const [loadData, setLoadData] = useState(false);
  useEffect(() => {
    setLoadData(true);
    fetch(
      "https://newsapi.org/v2/everything?q=technology&apiKey=5dac76dc0f65416daf2e30ad83b408cf"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.articles[8]);
        setLoadData(false);
      });
  }, []);

  if (loadData) {
    return (
      <div className="heroContainer">
        <div className="heroContainer__overlay">
          <div className="heroContainer__overlay--info">
            <span className="badge bg-primary">Dommy data </span>
            <h2>News data</h2>
            <h4>By Televisa</h4>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="heroContainer">
      <div className="heroContainer__overlay">
        <div className="heroContainer__overlay--info">
          <span className="badge bg-primary">technology </span>
          <h2>{article.title}</h2>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1426900985728-92d56f56fdb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwNTI1NDA1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" className="img-fluid" alt="image_article" />
    </div>
  );
}
