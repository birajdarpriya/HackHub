import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class AppResultsRow extends PureComponent {
  
constructor() {
    super();
// Math.floor(Math.random() * (max - min + 1)) + min;
 this.colors = ["bg-aqua", "bg-green", "bg-yellow", "bg-red"];
 this.colorIndex = Math.floor(Math.random() * (4));
    this.icons = ["ion-bag", "ion-stats-bars", "ion-person-add", "ion-pie-graph"];
  this.iconIndex = Math.floor(Math.random() * (4));

    this.state = { // thanks to @Piotr Berebecki, 
                  // i know to define states variable
      test2:'this is state test'
    }
  }
   
   
  onSelectApp = title => {

    this.props.onSelectApp(this.props.title);
  }


  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
      console.log(this.props.symbol);
    const src = this.props.symbol;
    return (
      <div className="col-lg-3 col-xs-6" onClick={this.onSelectApp}>
          
          <div className={"small-box " + this.colors[this.colorIndex]}>
            <div className="inner" >
              <h2 style={{oveflow: "hidden"}} >{this.props.title}</h2>

              <p>React JS Application</p>
            </div>
            <div className="icon">
              <i className={"ion " + this.icons[this.iconIndex]}></i>
            </div>
            <a href="#" className="small-box-footer">Show Details <i className="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
    );
  }
}
AppResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
  thumbnail : PropTypes.string,
  onSelectApp : PropTypes.func
};
export default AppResultsRow;
