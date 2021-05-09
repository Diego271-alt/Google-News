import React, { useState, useEffect } from "react";
import ItemMoreNews from "./ItemMoreNews";

export default function MoreNews() {
  const [periodists, setPeriodist] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setPeriodist(data);
      });
  }, []);

  return (
    <ol className="list-group list-group-numbered">
      {periodists.map((periodist) => (
        <ItemMoreNews key={periodist.id} periodist={periodist} />
      ))}
    </ol>
  );
}
