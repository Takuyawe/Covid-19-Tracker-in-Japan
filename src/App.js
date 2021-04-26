import React, { useState, useEffect } from "react";
import { fetchData } from "./api/fetchData";
import ShowData from "./components/ShowData";
import YetSearch from "./components/YetSearch";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const [prefecture, setPrefecture] = useState();

  const search = async (e) => {
    if (e.key === "Enter") {
      setData(await fetchData());

      if (prefecture === undefined) {
        setError(true);
      } else {
        error ? setError(false) : setError(true);
      }
    }
  };

  useEffect(() => {
    data && setPrefecture(data.filter((d) => d.provinceState === query));
  }, [data]);

  return (
    <div className="container">
      <div className="title">
        <h2>Covid-19 Tracker in Japan</h2>
      </div>
      <div className="input">
        <label htmlFor="prefecture">Prefecture : </label>
        <input
          type="text"
          placeholder="Type a prefecture ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {!prefecture && error ? <p className="error">There's no such prefecture !</p> : null}

      {prefecture ? <ShowData prefecture={prefecture} /> : <YetSearch />}
    </div>
  );
};

export default App;
