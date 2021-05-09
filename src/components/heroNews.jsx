import React, { useState, useEffect } from "react";

import "./styles/heroStyles.css";
export default function HeroNews(props) {
  const [article, setArticle] = useState({});
  const [loadData, setLoadData] = useState(false);
  useEffect(() => {
    setLoadData(true);
    fetch(
      `https://gnews.io/api/v4/search?q=Technology&token=325e4e442fe032567453dc05e3e4fe38`,
      {
        method: "GET",
        headers: {
          "Cookie": "PHPSESSID=81lqsre1329k9988s4sl6f7a0a",
        },
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.articles[2]);
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
      <img src={article.image || "https://images.unsplash.com/photo-1426900985728-92d56f56fdb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwNTI1NDA1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"} className="img-fluid" alt="image_article" />
    </div>
  );
}
