import React, { Component } from "react";

class Reviews extends Component {
  render() {
    return (
      <section id="reviews">
        <div className="container">
          <div className="row">
          <div className="col-md-8">
            <img src="https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg" />
          </div>
          <div className="col-md-4">
            <h5 className="comp-title">Reviews</h5>
            <h2>The Food Network</h2>
            <h4>Best Restaurant in the N.Y. Area</h4>
            <p>Lorem ipsum dolor amet mollit schlitz hammock, street art shabby chic shaman taiyaki man bun brunch exercitation quis. Cred adipisicing swag selvage everyday carry bushwick poutine art party deep v mlkshk voluptate occupy. Anim beard meh proident ugh sed voluptate tilde hashtag wolf scenester affogato sunt magna irure. Occaecat do tumeric chillwave, shabby chic copper mug nulla edison bulb labore next level pitchfork la croix minim vice poutine. Kogi anim tilde roof party pork belly. Tousled in yr, schlitz palo santo street art bushwick laborum post-ironic culpa next level XOXO portland.</p>
            <div className="author"><strong>Joe Bastiachi</strong> - winner of the chef mastery award</div>
            <div className="arrows">
              <i className="fas fa-arrow-left"></i>
              <i className="fas fa-arrow-right"></i>
            </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
