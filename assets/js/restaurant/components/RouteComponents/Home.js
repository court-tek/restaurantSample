import React, { Component } from "react";
import TopImage from "../TopImage";
import OurStory from "../OurStory";
import SpecialMenu from "../SpecialMenu";
import RandomQuote from "../RandomQuote";
import Reviews from "../Reviews";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <TopImage />
        <OurStory />
        <SpecialMenu />
        <RandomQuote />
        <Reviews />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default Home;
