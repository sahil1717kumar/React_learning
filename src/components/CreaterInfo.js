import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const createrInfo = () => {
  const [createrDetail, setCreaterDetail] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/sahil1717kumar");
    const json = await data.json();

    console.log(json);
    setCreaterDetail(json);
  };
  if (createrDetail === null) return <Shimmer />;
  const { name, avatar_url, login } = createrDetail;
  return (
    <div className="createrInfo">
      <img src={avatar_url} />
      <h2>{name}</h2>
      <h3>Location: India</h3>
      <h3>Github User name: {login}</h3>
    </div>
  );
};

export default createrInfo;
