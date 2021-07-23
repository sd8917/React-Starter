import React, {Component} from 'react';
import Footer from "./Components/Footer"

import TopBar from "./Components/TopBar"
import Card from './Components/Card';

import "./App.css"
import Banner from './Components/Banner';
import SearchBox from './Components/Search';

//MockData.
// import { products } from "./Components/utils/mockData";
import axios from "axios"
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      products : [],
      orgProducts : [],
      loader : true,
      cart : [],
    };
    console.log("Constructor Phase !")

  }

  componentDidMount(){
    console.log("Update phase componentDidMount")
      axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then(res => 
        this.setState({
          products : res.data, 
          loader:false,
          orgProducts : res.data,
        }));  
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Update phase shouldComponentUpdate")
    if(nextState.products.length){
      return true;
    }else{
      return false;
    }
  }

  componentDidUpdate(){
    console.log("Update phase componentDidUpdate")
  }

  handleSearch = (value) => {
    const filteredValue = this.state.orgProducts.filter(
      (item) => item.name.includes(value)
    )
    console.log("Filtered Products" , filteredValue)
    this.setState({products : filteredValue});

  }

  render(){
    console.log("Phase render")
    return(
      <div>
        <TopBar cartCount={this.state.cart.length}/>
        <Banner />

        <SearchBox 
          onSearchValue = {this.handleSearch}
        />
        {this.state.loader ? (
        <h1>Loading ... </h1> ) :( 
          <div className="d-flex">

            {this.state.products.map((item, index) => (
              <Card {...item} />
            ))}

        </div> )}

        <Footer />
    </div>

    )
  }
}

export default App;