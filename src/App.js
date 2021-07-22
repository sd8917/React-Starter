import React from 'react';
import Footer from "./Components/Footer"

import TopBar from "./Components/TopBar"
import Card from './Components/Card';

import "./App.css"
import Banner from './Components/Banner';
import { products } from "./Components/utils/mockData";

const App = () => {
  return (
    <div>
      <TopBar />
      <Banner />
      <div className="d-flex">
        {products.map((item, index) => (
          <Card {...item} />
        ))}
      </div>

      <Footer />
    </div>

  )
}

export default App;