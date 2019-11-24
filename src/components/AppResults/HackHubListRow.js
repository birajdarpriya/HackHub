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

    this.state = {
      test2:'this is state test'
    }
  }


  onSelectApp = id => {

    this.props.onSelectApp(this.props.id);
  }


  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
      
    const src = this.props.symbol;
    return (
      <div className="col-lg-3 col-xs-6" onClick={this.onSelectApp}>

          <div className={"small-box " + this.colors[this.colorIndex]}>
            <div className="inner" >
              <h2 style={{oveflow: "hidden"}} >{this.props.title}</h2>

              <p>{this.props.teamname}</p>
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
HackhubListRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
  thumbnail : PropTypes.string,
  onSelectApp : PropTypes.func,
  teamname : PropTypes.string,
  id : PropTypes.number
};
export default HackhubListRow;
