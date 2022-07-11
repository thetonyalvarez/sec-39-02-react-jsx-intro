const App = () => {
  return (
    <div>
      <Person name="Bobby" age={24} hobbies={["Fishing", "Hunting"]}/>
      <Person name="Christian" age={13} hobbies={["Video Games", "Biking"]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));