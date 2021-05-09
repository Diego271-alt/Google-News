import React, { useState, useEffect } from "react";
import "./styles/ItemNew.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Moment from "react-moment";
export default function ItemNew(props) {
  const { article } = props;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div key={article._id} data-aos="fade-right" className="Card">
      <div className="card-body">
        <img src={article.media} className="img-fluid" alt="news image" />
        <span className="badge bg-danger">{article.topic}</span>
        <div className="card-info">
          <h2 className="card-title">{article.title}</h2>
          {article.summary ? (
            <p className="card-text">{article.summary.slice(0,100)}</p>
          ) : (
            <p className="card-text">{article.country}</p>
          )}
          <p className="card-text">
            <Moment fromNow>{article.published_date}</Moment>
          </p>
        </div>
      </div>
      <div className="card-footer bg-dark text-muted">
        {article.author || "NewYork"}
      </div>
    </div>
  );
}
