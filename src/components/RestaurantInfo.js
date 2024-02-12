import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const {resId} = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    console.log(json.data);

    setRestaurantData(json?.data);
  };
  if (restaurantData === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines, sla, availability } =
    restaurantData?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div className="resInfo _container">
      <div className="resInfo">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <h2>{costForTwoMessage}</h2>
        <h2>{availability.avgRatingString}</h2>
        <h2>{sla.deliveryTime} Minutes</h2>
      </div>
      <div className="resMenu">
        <h1>MENU</h1>
        <ul>
          {itemCards.map((items) => (
            <li key={items.card.info.id}>
              {items.card.info.name} - Rs.
              {items.card.info.defaultPrice / 100 ||
                items.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
