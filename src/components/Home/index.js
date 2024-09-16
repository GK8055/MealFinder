import "./index.css";
import { useState, useEffect } from "react";
import ListItemView from "../ListItemView";

const apiStatus = {
  success: "SUCCESS",
  failure: "Failure",
  loading: "Loading",
};

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [apiData, setApiData] = useState("");
  const [Status, setApiStatus] = useState("");

  const getIntialSearchData = async () => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    if (response.ok) {
      setApiData(data);
      setApiStatus(apiStatus.success);
      console.log(data);
    } else {
      setApiStatus(apiStatus.failure);
    }
  };

  useEffect(() => {
    getIntialSearchData();
  });

  const onSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onClickSearchBtn = async () => {
    const url = "www.themealdb.com/api/json/v1/1/categories.php";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  const listData = Status === apiStatus.success ? apiData.categories : "";
  //   console.log(listData, "listData");
  return (
    <div className="home_container">
      <div className="title_container">
        <input
          className="input_ele"
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={onSearchInputChange}
        />
        <button type="button" className="search_btn" onClick={onClickSearchBtn}>
          Search
        </button>
      </div>
      <div className="list_container">
        {Status === apiStatus.success
          ? apiData.categories.map((each) => (
              <ListItemView data={each} key={each.idCategory} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Home;
