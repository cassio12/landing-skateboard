import React from "react";
import "../App.css";

class Text extends React.Component {
    constructor(props){
        super(props);


    }

    render(){
        return(
            <div className="boxText">
                <p className="boxText-text">{this.props.value}</p>
            </div>
        )
    }
}
export default Text;
