import React from 'react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';


const MainSection = () => {
  return (
    <section className="main-section">
      <div className="container mt-4">
        <h1>Welcome to Our College</h1>
        <p>
          Very few institutions,can rival the exquisite arts and music programmes we offer.
          Our faculty heartly welcomes you to experience the musical and artistic nature of you being.
          Come explore the expanse of infinite symphonies and melodies.
          allow us to help you discover you with our unorthodox and creative classes
        </p>
      </div>
      <br/>
      <hr />

      {/* cards */}


      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
            <img src={image1} alt="Card 1" />
              <div className="card-body">
                <p className="card-text">Welcome to Musical School Of Arts</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
               <img src={image2} alt="Card 1" />
              <div className="card-body">
                <p className="card-text">Logo Musical School Of Arts</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
            <img src={image3} alt="Card 1" />
              <div className="card-body">
                <p className="card-text">Mind Blowing Music Classes</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
            <img src={image4} alt="Card 1" />
              <div className="card-body">
                <p className="card-text">Stringed For Exellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;