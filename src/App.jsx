import React, { useEffect, useState, useRef, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/heroNews";
import ItemNew from "./components/ItemNew";
import ItemMoreNews from "./components/MoreNews";
import "./App.css";

import useData from "./hooks/useData";

function App() {
  const {
    page,
    load,
    articles,
    changePage,
    loadData,
    storeData,
  } = useData({
    initalarticles: [],
    initialpage: 1,
    initialloadData: false,
  });
  const [search, setSearch]= useState('')

  const searchInput = useRef(null);
  useEffect(() => {
    loadData(true);
    fetch(
      `https://newsapi.org/v2/everything?q=digital&page=${page}&apiKey=5dac76dc0f65416daf2e30ad83b408cf`
    )
      .then((response) => response.json())
      .then((data) => {
        storeData(data.articles);
        loadData(false);
      });
  }, [page]);
  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };
  const filteredArticles = useMemo(
    () =>
      articles.filter((article) => {
        return article.source.name.toLowerCase().includes(search.toLowerCase());
      }),
    [articles, search]
  );

  return (
    <div className="App">
      <Header />
      <Hero article={articles[5]} />
      <div className="App__bodyNews">
        {load ? (
          <div className="spinner-border  text-success "></div>
        ) : (
          <div className="bodyNews__listnews">
            <div className="bodyNews__listnews--header">
              <h1>Read More</h1>
            </div>
            <div class=" input-group mb-3">
              <button
                type="button"
                onClick={() => changePage(page - 1)}
                class="btn btn-outline-success"
              >
                Prev Page
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="NewYork Times"
                value={search}
                ref={searchInput}
                onChange={handleSearch}
              />
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => changePage(page + 1)}
              >
                Next Page
              </button>
            </div>
            {}
            {filteredArticles.map((article) => (
              <ItemNew article={article} />
            ))}
          </div>
        )}

        <div className="bodyNews__morenews">
          <div className="bodyNews__morenews--header">
            <h1>Others</h1>

            <ItemMoreNews />
          </div>
        </div>
      </div>
      <div className="App__footer bg-dark ">
        <div className="App__footer--title">
          <h1>Google News</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
