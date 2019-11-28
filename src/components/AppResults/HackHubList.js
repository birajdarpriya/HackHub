import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import HackHubListRow from "./HackHubListRow";

class HackHubList extends PureComponent {
  componentDidMount() {

  }

  onSelectApp = id => {
    this.props.onSelectApp(id);
  }

  componentWillUnmount() {
    //alert("unmounted !!!");
  }

  render() {
    return (
        this.props.searchResults.map(result => (

          <HackHubListRow
            key={result.id}
            symbol={result.symbol}
	    thumbnail = {result.symbol}
            title={result.title}
            teamname={result.teamname}
            id={result.id}
            category={result.category}
            hackathonName ={result.hackathonName}
            onSelectApp = {this.onSelectApp}
          />

        ))

    );
  }
}
HackHubList.propTypes = {
  searchResults: PropTypes.array
};
export default HackHubList;
