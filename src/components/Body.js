import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //Hook in React
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filterResList = listOfRestaurants.filter(
              (resData) => Number(resData.info.rating.rating_text) > 4
            );
            setListOfRestaurant(filterResList);
          }}
        >
          TopRestaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
