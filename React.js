const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "header" }, [
    React.createElement("h1", {}, "First Heading"),
    React.createElement("h2", {}, "First Sub-Heading"),
  ]),
  React.createElement("div", { id: "footer" }, [
    React.createElement("h1", {}, "Second Heading"),
    React.createElement("h2", {}, "Second Sub-Heading"),
  ]),
  React.createElement("div", { id: "footer" }, [
    React.createElement("h1", {}, "Second Heading"),
    React.createElement("h2", {}, "Second Sub-Heading"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
