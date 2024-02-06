const RestaurantCard = (props) => {
  const { resData } = props;
  // const {name,image,rating,order} = resData?.info;
  const { name, rating, image } = resData?.info;
  const { deliveryTime } = resData?.order;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image.url} />
      <h3>{name}</h3>
      <h4>{resData.info.cft.text}</h4>
      <h4>{rating.rating_text}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
