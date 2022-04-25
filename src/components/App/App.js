/* eslint-disable no-unused-vars */
import React from 'react';
import "./App.css";
import InquiresList from '../InquiriesList/InquiresList';
import Data from '../Data/Data';

//Hard-coded listing to test
const listing = {
  imageSrc: 'https://d1q9ztij0byik7.cloudfront.net/tsf/j6XmXCdQ2mOKFfpe4VZD_WhiteHouseSouthFacade.JPG',
  title: 'Awesome space in the heart of Chelsea',
  startDate: '2018-05-01',
  endDate: '2018-05-31',
  status: 'pending_adjudication',
  user: 'Renter',
  updatedAt: '2018-04-19T14:26:01Z',
  lastMessage: 'Hey there, your space looks great. Do you offer a discounted rate for booking by the month?',

};

//listings array to use in the InquiresList component for test listings
// for this to work, remove this.state. from <InquiresList listings={this.state.listings} /> and uncomment below
const listings = [ listing ]



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: Data.getListing(),
    };

    this.getListing = this.getListing.bind(this);
  }


  render() {
    return (
      <div className="App">
        <div className="flex items-center">
          <h1 className="text-6xl mx-auto p-6">Inquires about your listings</h1>
          <p>
            When prospective renters contacts you about your listings, their
            inquires are listed here.
          </p>
          <InquiresList listings={this.state.listings} />
        </div>
      </div>
    );
  }
}

export default App;
