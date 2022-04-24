import React from 'react';
import "./InquiresList.css";

import Listing from '../Listing/Listing';

class InquiresList extends React.Component {
  render() {
    return (
      <div className="InquiresList">
        {
          this.props.listings.map(listing => {
            return <Listing listing={listing} key={listing.id} />;
          })
        }
      </div>
    );
  }
}

export default InquiresList;
