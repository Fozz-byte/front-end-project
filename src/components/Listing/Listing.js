/* eslint-disable no-undef */
import React from 'react';
import "./Listing.css";

class Listing extends React.Component {
  render() {
    // const { listing } = this.props;
    return (
      <div className="Listing">
        <div className="image-container">
          <img src={this.props.listing.imageSrc} alt="" />
        </div>
        <div className="Listing-information">
          <div className="Listing-details">
            <h3>{this.props.listing.title}</h3>
            <p>{`${this.props.listing.startDate} - ${this.props.listing.endDate}`}</p>
            <p>{this.props.listing.status}</p>
          </div>
          <div className="user-message">
            <h3>{this.props.listing.user}</h3>
            <p>{this.props.listing.updatedAt}</p>
            <p>{this.props.listing.lastMessage}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Listing;
