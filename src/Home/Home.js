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
                <div className="footer">
                    <h5>Made with <i className="fa fa-heart"></i> In the UK by <a className="me" target="_blank" href="https://github.com/AlexCatch">@AlexCatch</a></h5>
                </div>
            </div>
        );
    }

    handleClick() {
        window.open("https://github.com/goKnekt");
    }

}

export default Home;
