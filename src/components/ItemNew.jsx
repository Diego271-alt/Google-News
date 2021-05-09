import React,{useState, useEffect} from "react";
import "./styles/ItemNew.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Moment from 'react-moment';
export default function ItemNew(props) {
  const {article}= props

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <div key={article.publishedAt} data-aos="fade-right" className="Card">
      <div className="card-body">
        <img
          src={article.urlToImage}
          className="img-fluid"
          alt="news image"
        />
        <span className="badge bg-danger">Economy</span>
        <div className="card-info">
          <h2 className="card-title">{article.title}</h2>
          <p className="card-text">
            {article.content.slice(0,120)}...
          </p>
          <p className="card-text">
          <Moment fromNow>{article.publishedAt}</Moment>
            
          </p>
        </div>
      </div>
      <div className="card-footer bg-dark text-muted"> {article.source.name}</div>
    </div>
  );
}
