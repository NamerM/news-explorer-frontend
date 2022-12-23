import React from "react";
import aboutphoto from '../../images/author-image.jpeg';

function About() {

  return (
    <section className="about">
      <div >
        <img className="about__image" src={aboutphoto} alt="Photo of the Author" />
      </div>
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">Hi all! This is Melih Namer and you are visiting my fullstack final project web page. In this project I used the knowledge I learned throughout my journey for a year. </p>
        <p className="about__description"> Frontend and backend implenentations used in this app. We are asked to use all of the knowledge we gathered throughout our learning journey. Hope you will enjoy the app, countless hours are put in work for the production ^-^ .</p>
        <p className="about__description"> Also offering the best prices, I can modestly say that I'm your sole address for small business, family business solutions. Accept cup cakes for partial payments!</p>
      </div>
    </section>
  )
}



export default About;
