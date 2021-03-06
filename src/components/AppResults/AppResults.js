import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import AppResultRow from "./AppResultRow";

class AppResults extends PureComponent {
  componentDidMount() {

  }

  onSelectApp = title => {
    this.props.onSelectApp(title);
  }

  componentWillUnmount() {
   // alert("unmounted !!!");
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.searchResults.map(result => (
          <AppResultRow
            key={result.title}
            symbol={result.symbol}
	    thumbnail = {result.thumbnail}
            title={result.title}
            onSelectApp = {this.onSelectApp}
          />
         
        ))}
      </div>
    );
  }
}
AppResults.propTypes = {
  searchResults: PropTypes.array
};
export default AppResults;
