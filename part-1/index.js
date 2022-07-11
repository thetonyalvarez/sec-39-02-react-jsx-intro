const FirstComponent = () => {
  return /*#__PURE__*/React.createElement("h1", null, "My Very First Component");
};

const App = () => {
  /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement(FirstComponent, null));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

