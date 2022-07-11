const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Tony"/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById("root"));
