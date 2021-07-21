import React from 'react';//imr

import './App.css';
//any name
import Topbar from './Components/Topbar';

import Footer from './Components/Footer';

import Card from './Components/Card';

import { user, names } from './utils/mockData';

const App = () => {
  // sfc
  // const user = "HELLO";
  // const names = [
  //   {
  //     name: "Hemant",
  //     age: "20",
  //     salary: "25LPA",
  //   },
  //   {
  //     name: "Mohit",
  //     age: "20",
  //     salary: "30LPA",
  //   },
  //   {
  //     name: "Ayush",
  //     age: "20",
  //     salary: "32LPA",
  //   },
  //   {
  //     name: "sudhanshu",
  //     "age": "23",
  //     salary: "40lpa",
  //   }
  // ];


  return (
    <div>

      <Topbar username={user} />

      <div className="card">
        {names.map((item, index) => (
          <Card
            {...item}
            index={index}
          // name = {item.name}
          // age = {item.age}
          // salary = {item.salary}
          // index = {item.index}
          />
        ))}


      </div>

      <Footer />
    </div>
  );
};

export default App;