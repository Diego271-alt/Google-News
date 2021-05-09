import React,{useEffect,useState} from "react";
import ItemNew from "./ItemNew";
export default function Articles() {
    const [articles, setArticle] = useState([]);
    const [loadData, setLoadData] = useState(false);
    useEffect(() => {
        setLoadData(true);
        fetch(
          "https://newsapi.org/v2/everything?q=digital&apiKey=5dac76dc0f65416daf2e30ad83b408cf",{
            method:"GET",
            headers:{"Cookie":"__cfduid=d987d76f971cd30ebbd8302e1c67386271620511423"}, 
            redirect: 'follow'
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setArticle(data.articles);
            setLoadData(false);
          });
      }, []);
  return (
    <div className="bodyNews__listnews--header">
      <h1>Leer más</h1>
      {articles.map((article) => (
        <ItemNew  article={article} />
      ))}
    </div>
  );
}
