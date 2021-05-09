import React from "react";

export default function ItemMoreNews(props) {
    const {article} = props
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{article.source.name}</div>
        {article.author}
      </div>
      <span className="badge bg-dark rounded-pill">Digital</span>
      <span className="badge bg-success rounded-pill">{Math.floor(Math.random()*100)}</span>
    </li>
  );
}
