import React from "react";
import './styles/ItemMoreNews.css'
export default function ItemMoreNews(props) {
  const { periodist } = props;
  return (
    <li
      key={periodist.id}
      className="list-group-item d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto" id="info">
        <div className="fw-bold">{periodist.company.name}</div>
        <p> {periodist.website}</p>
      </div>
      <span className="badge bg-dark rounded-pill">Digital</span>
      <span className="badge bg-success rounded-pill">
        {Math.floor(Math.random() * 100)}
      </span>
    </li>
  );
}
