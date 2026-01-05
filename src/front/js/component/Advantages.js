// Import the images
import React from "react";
import indexImage from "../../images/index.jpg";
import tashaMichelleImage from "../../images/tasha_michelle_kloset.jpg";
import portaClassicaImage from "../../images/porta_classica.jpg";

const AdvantagesSection = () => (
  <section className="advantages text-center mt-5">
    <div className="col-md-12">
      <h2>Our Advantages</h2>
      <p>We strive to impress you, not just meet your expectations.</p>
    </div>
    <div className="card-group mt-4">
      {/* Card 1 */}
      <div className="card">
        <img src={tashaMichelleImage} className="card-img-top" alt="Tasha Michelle Kloset" />
        <div className="card-body">
          <h5 className="card-title">High-Quality Designs</h5>
          <p className="card-text">The highest quality designs on the best materials.</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="card">
        <img src={portaClassicaImage} className="card-img-top" alt="Porta Classica" />
        <div className="card-body">
          <h5 className="card-title">Exceptional Customer Service</h5>
          <p className="card-text">We strive to impress you, not just meet your expectations.</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card">
        <img src={indexImage} className="card-img-top" alt="Lightbox Signs" />
        <div className="card-body">
          <h5 className="card-title">Reliable Signage Solutions</h5>
          <p className="card-text">Custom banners, channel letters, and window lettering for your business.</p>
        </div>
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
