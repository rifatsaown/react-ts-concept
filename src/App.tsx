import React from "react";
import "./App.css";

interface iPeople {
  name?: string;
  age?: number;
  email?: string;
}
const peoples: iPeople[] = [
  {name: "John", age: 20, email: "jonsnow@gmail.com"},
  {name: "Arya", age: 18, email: "ariyastark@gmail.com"},
  {name: "Sansa", age: 19, email: "sansastark@gmail.com"},
  {name: "Bran", age: 16, email: "branstark@gmail.com"},
  {name: "Robb", age: 18, email: "robstark@gmail.com"},
]

function App() {
  return (
    <>
    <div className="App">
      {
        peoples.map(people=> <People name={people.name} age={people.age} email={people.email}/>)
      }
    </div>
    </>
  );

  function People(props: iPeople) {
    return (
      <div className="person">
        <h3>Name :{props.name} </h3>
        <p>Age :{props.age} </p>
        <p>Email :{props.email} </p>
      </div>
    );
  }
}

export default App;
