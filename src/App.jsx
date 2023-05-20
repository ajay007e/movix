import { useState, useEffect } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import { fetchDataFromApi } from "./utils/api";

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  useEffect(() => {
    apiTesting();
  }, []);

  return (
    <div className="App">
      App
      <br />
      {url?.total_pages}
    </div>
  );
}

export default App;
