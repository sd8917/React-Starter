import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "User"
        };
        //console.log("First Call - Constructor!");
    }

    updateUser = () => {
        
    //    this.state.name = "New"
       this.setState({name: "New"})
    //    console.log("this.state.name", this.state.name);
    //     this.setState({name: "New"}, () => {
    //         console.log("this.state.name After setState", this.state.name)
    //     });//30ms

    };

    componentDidMount(){
        // console.log("Third call componentDidMount");//Here we make api call
        

    }

    //Everytime there is update we call render method.. 

    render() {
        //console.log("Second Call - Render!")
        return (
            <div className="jumbotron p-4">
                <h1 className="display-4 banner-heading">Hello, world! {this.state.name}</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility class for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <button 
                    onClick = {this.updateUser}
                    className="btn btn-primary btn-lg" href="#" role="button">Change User</button>
                </p>
            </div>   
        )
    }
}

export default Banner;
