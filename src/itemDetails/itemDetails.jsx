import React, { Component } from "react";
import "./itemDetails.css";
import PropTypes from "prop-types";
import Spinner from "../spinner";

const Record = ({ item, label, field }) => {
  return (
    <li className="item_info">
      {label}: {item[field]}
    </li>
  );
};
Record.propTypes = {
  item: PropTypes.object,
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};
export { Record };
export default class ItemDetails extends Component {
  state = {
    item: null,
    img: null,
  };

  updateItem() {
    const { getData, getImgUrl, itemId } = this.props;
    if (!itemId) return;
    getData(itemId).then((item) =>
      this.setState({ item, img: getImgUrl(itemId) })
    );
  }
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) this.updateItem();
  }
  render() {
    if (!this.state.item) return <Spinner />;
    return (
      <div className="card person-details">
        <img className="card_img" src={this.state.img} alt="" />
        <div className="card_body">
          <p className="card_title">{this.state.item.name}</p>
          <ul className="card_text">
            {React.Children.map(this.props.children, (child) =>
              React.cloneElement(child, { item: this.state.item })
            )}
          </ul>
        </div>
      </div>
    );
  }
}
ItemDetails.propTypes = {
  getData: PropTypes.func.isRequired,
  getImgUrl: PropTypes.func.isRequired,
  itemId: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};
