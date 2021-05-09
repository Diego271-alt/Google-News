import React , {useState, useEffect}from "react";
import ItemMoreNews from './ItemMoreNews'



export default function MoreNews() {
  const [articles, setArticle] = useState([]);
  const [loadData, setLoadData] = useState(false);
  useEffect(() => {
    setLoadData(true);
    fetch(
      "https://newsapi.org/v2/everything?q=economy&apiKey=5dac76dc0f65416daf2e30ad83b408cf"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.articles);
        setLoadData(false);
      });
  }, []);
  return (
    <ol className="list-group list-group-numbered">

            {
              articles.map(article =>(<ItemMoreNews key={article.publishedAt} article={article} />))
            }

  </ol>
  );
}
