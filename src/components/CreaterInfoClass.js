/*
Used class based component instead of function based component
*/
import React from "react";
class CreaterInfoClass extends React.Component {
    //first to execute
  constructor(props) {
    super(props);
    this.state ={
      name: "dummy",
      location: "dummy",
      contact: "dummy",
    };
  }
  //third to get executed
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sahil1717kumar");
    const json = await data.json();

    console.log(json);
    this.setState(json);
  }

  //second to get executed
  render() {
    const {name,login,avatar_url} = this.state;
    return (
      <div className="createrInfo">
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h3>Location: India</h3>
        <h3>Github User name: {login}</h3>
      </div>
    );
  }
}

export default CreaterInfoClass;
