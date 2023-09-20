import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUsPage = () => {
  // Sample form submission function (replace with actual form handling logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form handling logic here

    
  };

  return (
    <div className="container">
      <header className="mt-5 text-center">
        <h1>Contact Us</h1>
      </header>

      <section className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            {/* Placeholder for the interactive map */}
            <div id="map" style={{ height: '400px' }}>
              {/* You can integrate your map service here */}
              {/* For example, Google Maps or Mapbox */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
