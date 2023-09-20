import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="container">
      <header className="mt-5 text-center">
        <h1>Welcome to Our Website</h1>
        <p>Explore and Discover Amazing Things</p>
      </header>

      <section className="mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://source.unsplash.com/random/500×700/?social"
                className="card-img-top"
                alt="linkss"
              />
              <div className="card-body">
                <h5 className="card-title">Feature 1</h5>
                <p className="card-text">A brief description of the feature.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://source.unsplash.com/random/500×700/?social"
                className="card-img-top"
                alt="linkss"
              />
              <div className="card-body">
                <h5 className="card-title">Feature 2</h5>
                <p className="card-text">A brief description of the feature.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://source.unsplash.com/random/500×700/?social"
                className="card-img-top"
                alt="links"
              />
              <div className="card-body">
                <h5 className="card-title">Feature 3</h5>
                <p className="card-text">A brief description of the feature.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 text-center">
        <p>Call to Action Section</p>
        <button className="btn btn-primary">Get Started</button>
      </section>
    </div>
  );
};

export default HomePage;
