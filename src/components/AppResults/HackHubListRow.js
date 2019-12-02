import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class HackhubListRow extends PureComponent {

constructor() {
    super();
// Math.floor(Math.random() * (max - min + 1)) + min;
 this.colors = ["bg-aqua", "bg-green", "bg-yellow", "bg-red"];
 this.colorIndex = Math.floor(Math.random() * (4));
    this.icons = ["ion-bag", "ion-stats-bars", "ion-person-add", "ion-pie-graph"];
  this.iconIndex = Math.floor(Math.random() * (4));

 this.colorMap = {
       "Hackademy 2019" : {color : "bg-aqua", icon : "ion-bag"},
       "Code Grind 1.0" : {color : "bg-red", icon : "ion-stats-bars"},
       "Code Grind 2.0" : {color : "bg-purple", icon : "ion-person-add"},
       "Pune To Paris" : {color : "bg-green", icon : "ion-pie-graph"},
       "Any <body> Can Code" : {color : "bg-light bg-yellow", icon : "ion-compass"},
       "default" : {color : "bg-gray", icon : "ion-bookmark"},
       null : {color : "bg-gray", icon : "ion-bookmark"},
 }


    this.state = {
      test2:'this is state test'
    }
  }


  onSelectApp = id => {

    this.props.onSelectApp(this.props.id);
  }


  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const colorCode = this.colorMap[this.props.hackathonName] ||  this.colorMap["default"] ;
   
    const src = this.props.symbol;
    return (
      <div className="col-lg-3 col-xs-6" onClick={this.onSelectApp}>

          <div className={"small-box " + colorCode.color}>
            <div className="inner" >
              <h5 style={{oveflow: "hidden"}} >{this.props.title}</h5>

              <p>{this.props.teamname}</p>
            </div>
            <div className="icon">
              <i className={"icon " + colorCode.icon}></i>
            </div>
            <a href="#" className="small-box-footer">Show Details <i className="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
    );
  }
}
HackhubListRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
  thumbnail : PropTypes.string,
  onSelectApp : PropTypes.func,
  teamname : PropTypes.string,
  id : PropTypes.number,
  category : PropTypes.string,
  hackathonName : PropTypes.string
};
export default HackhubListRow;
