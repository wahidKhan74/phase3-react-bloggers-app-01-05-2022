import React from "react";

class Header extends React.Component {

    //data
    constructor(props) {
        super(props);
    }

    // template & logic
    render() {
        return (
            <header>
                <h2>{this.props.appname}</h2>
            </header>
        )
    }

}


export default Header;