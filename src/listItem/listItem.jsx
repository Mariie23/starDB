import React, { Component } from "react";
import "./listItem.scss";
import PropTypes from "prop-types";
export default class ListItem extends Component {
  renderItems(items) {
    return items.map((item) => {
      return (
        <li
          key={item.id}
          className="list_item"
          onClick={() => this.props.onSelectItem(item.id)}
        >
          {this.props.children(item)}
        </li>
      );
    });
  }
  render() {
    const items = this.props.data;
    return <ul className="list">{this.renderItems(items)}</ul>;
  }
}

ListItem.propTypes = {
  onSelectItem: PropTypes.func.isRequired,
  children: PropTypes.func,
};
