import React from 'react';//imr
const App = () => {
  // sfc
  const user = "HELLO";
  const names = [
    {
      name: "Hemant",
      age: "20",
      salary: "25LPA",
    },
    {
      name: "Mohit",
      age: "20",
      salary: "30LPA",
    },
    {
      name: "Ayush",
      age: "20",
      salary: "32LPA",
    },
    {
      name: "sudhanshu",
      "age": "23",
      salary: "40lpa",
    }
  ];

  const HeadingStyle={
    color : "red",
    backgroundColor: "yellow"
  }

  return (
    <div>
      <h1>Top Bar - {user}</h1>
      {names.map(({ name, age, salary }, index) => (
        <div>
          <h2 style ={HeadingStyle}>Name : {name}</h2>
          <h3>Age : {age}</h3>
          <h4>Salary : {salary}</h4>
        </div>
      ))}
      <h1>Footer</h1>
    </div>
  );
};

export default App;