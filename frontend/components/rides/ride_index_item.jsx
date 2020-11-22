import React from "react";
import Carousel from "nuka-carousel";

class RideIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


 
  handleClick() {
    this.props.history.push(`/rides/${this.props.ride.id}`);
  }

  render() {
      const {ride} = this.props
      const { description, model, brand, price, style } = ride;
     const rideCaro =
      <div className="ride-photo-container" key={ride.id}>
            <Carousel
              width={"15vw"}
              wrapAround={true}
              heightMode={"first"}
              transitionMode={"scroll3d"}
            >
              {ride.photoUrls.map((photo) => {
                return (
                  <img className="ride-photo" src={photo} key={photo}></img>
                );
              })}
            </Carousel>
          </div>
     
    //   });

    return (
      <li className="ride-index-item" onClick={this.handleClick}>
            {rideCaro}
        <section className="index-text-desc">
          <p>
            {model}-{brand}-{style}
          </p>
          <p>{description}</p>
          <p>{price}</p>
        </section>
      </li>
    );
  }
}

export default RideIndexItem;
