const Person = (props) => {
    let response;
    let name = props.name
    // If person is over 18, display addn'tl h3 that says "please go vote"
    if (props.age > 18)  {
      response = "Please go vote!"
    } else {
      response = "You must be 18."
    }

    if (name.length > 8) {
      name = name.slice(0,6)
      console.log(name)
    }

    return (
      <div>
        <p>Learn some information about this person.</p>
        <h1>{name}</h1>
        <h3>{response}</h3>
        <h4>Hobbies:</h4>
        <ul>
          {props.hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    )
}