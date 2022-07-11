const FirstComponent = () => {
  return <h1>My Very First Component</h1>
}

const App = () => {
  <div>
    <FirstComponent />
  </div>
}

ReactDOM.render(<App />,
  document.getElementById("root"));
