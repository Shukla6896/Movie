import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import "./Search.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [savetoDB, setSaveToDb] = useState("");

  // eslint-disable-next-line
  const delaySaveToDb = useCallback(debounce((val)=>{setSaveToDb(val)}, 1000), []);     //Debouncing for optimizing api request
  
  const handleChange = (e) => {
    setInput(e.target.value);
    delaySaveToDb(e.target.value);
  };

  function debounce(fn, delay) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }

  const getData = async () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=33ab809c8963aaa7a09fa7973b47e2b5&query=${savetoDB}&page=3`
    )
      .then((results) => results.json())
      .then((data) => setData(data.results));
  };

  const nodata=()=>{ //to prevent api request on empty "" or no input
  }

  useEffect(() => {
    (savetoDB !=="" ? getData() : nodata() );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savetoDB]);

  return (
    <>
      <h1 className="head">Movie Search</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search anything"
          className="search-input"
          value={input}
          onChange={handleChange}
        />
      </div>

      <Card results={data} />

      <footer>
        <h1 className="a">©Movie-Search</h1>
      </footer>
    </>
  );
};

export default Search;
