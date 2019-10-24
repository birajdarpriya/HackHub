import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SearchInput extends PureComponent {
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Start typing your requirement..." onChange={this.handleChange} />
          <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default SearchInput;
