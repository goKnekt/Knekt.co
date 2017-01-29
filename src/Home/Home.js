import React, {Component} from 'react';
import './Home.css';
class Home extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="home">
                <div className="header">
                    <h1>Knekt</h1>
                    <h3>Home. Connected. Brilliant.</h3>
                    <button onClick={this.handleClick} className="github">Github</button>
                </div>
            </div>
        );
    }

    handleClick() {
        window.open("https://github.com/AlexCatch/Knekt");
    }

}

export default Home;
