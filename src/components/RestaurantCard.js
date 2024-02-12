import { IMAGE_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  // const {name,image,rating,order} = resData?.info;
  const { name, avgRating, cloudinaryImageId,cuisines,sla } = resData?.info;
  // const { deliveryTime } = resData?.order;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={IMAGE_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      {/* <h4>{resData.info.cft.text}</h4> */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
