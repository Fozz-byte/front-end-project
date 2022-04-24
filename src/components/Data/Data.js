const url = './data.json';

const Data = {
  getListing() {
    return fetch(url)
    .then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.listings) {
        return jsonResponse.listings.map(listing => ({
          id: listing.id,
          imageSrc: listing.photo_small,
          title: listing.title,
          startDate: listing.terms.start_date,
          endDate: listing.terms.end_date,
          user: listing.user.first_name,
          updatedAt: listing.updated_at,
          lastMessage: listing.last_message.message
        }));
      }
    });
  }
};

export default Data;
