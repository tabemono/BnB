# Bikes and Bikers

* Is a AirBnB clone with the theme of motorcycles instead of homes.

# Technologies
Backend implemented with Rails and Postgres while the front end is managed by React and Redux with Javascript. Syling is implemented with CSS and HTML5. AWS S3 is also incorporated to store images to prevent long load times. Google Maps API included to imitatate AirBnb's map feature.





# User Authentication
![login](https://github.com/tabemono/BnB/blob/media/media/login-gif.gif)

* Users are able to log in and signup through buttons that bring up a modal. User credentials are then validated through rails backend that deliver error messages when invalidations occur. Demo User login is also included to preview the app.


# Search Feature
![search](https://github.com/tabemono/BnB/blob/media/media/search-gif.gif)
* Listings are placed on the map when searched and filtered by city 
* Searchbar is implemented to update map and listings shown on index page.
```
  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.setState(this.props.keyword);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .rideSearch(this.state.keyword)
      .then(() => this.props.history.push(`/search=${this.state.keyword}`));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.setState(this.props.keyword);
    }
  }

```

# Adding Reviews 
![review](https://github.com/tabemono/BnB/blob/media/media/review-gif.gif)
* Users can add and remove reviews when logged in.


# Reserving Bookings And Cancellations
![booking](https://github.com/tabemono/BnB/blob/media/media/booking-gif.gif)
* Users can reserve rides on selected dates and remove their bookings at their selected page.


# Future Features
* Need to update my state and possibly remove redux and switch to hooks
* Add more search options
* Revamp Review section
