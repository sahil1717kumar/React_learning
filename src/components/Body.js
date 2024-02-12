import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //Hook in React
  const [listOfRestaurants, setListOfRestaurant] = useState([]); //both listofRestaurants and filterRestaurants
  const [filterRestaurants, setFilterRestaurant] = useState([]); // are storing values from api fetching.
  //one remain unchanged as absolute and second will be used for filtering content.
  const [searchText, setSearchText] = useState("");
  console.log("body rendered")
  useEffect(() => {
    console.log("useEffect Rendered");
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();
    console.log(json);

    setListOfRestaurant(
      //option chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (listOfRestaurants.length === 0) {
    console.log("fakecard");
    return <Shimmer />;
  }
  console.log(filterRestaurants);
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="searchBtn"
            onClick={() => {
              const filterList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filterList); //changes are occuring in second state variable 
              // created for filtering purpose.
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filterResList = listOfRestaurants.filter(
              (resData) => Number(resData.info.avgRating) > 4
            );
            setFilterRestaurant(filterResList);
          }}
        >
          TopRestaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
