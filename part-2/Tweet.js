const Tweet = (props) => {
  const { username, name, date, message } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{username}</h2>
      <p>{date}</p>
      <p>{message}</p>
    </div>
  );
}