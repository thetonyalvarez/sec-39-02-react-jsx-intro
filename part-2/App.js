const App = () => {
  return (
    <div>
      <Tweet username="user1" name="User 1" date="" message="My first tweet" />
      <Tweet username="user2" name="User 2" date="" message="My first tweet" />
      <Tweet username="user3" name="User 3" date="" message="My first tweet" />
      <Tweet username="user1" name="User 1" date="" message="My first tweet" />
      <Tweet username="user4" name="User 4" date="" message="My first tweet" />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById("root"));
