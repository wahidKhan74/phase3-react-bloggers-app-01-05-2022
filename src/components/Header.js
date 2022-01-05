import React from "react";

class Header extends React.Component {

    //data
    constructor(props) {
        super(props);
        this.message = "Today is a good day!";
    }

    // template & logic
    render() {
        return (
            <header>
                <h2>{this.props.appname}</h2>
                <p>{this.message}</p>
            </header>
        )
    }

}


export default Header;