import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUsPage = () => {
  return (
    <div className="container">
      <header className="mt-5 text-center">
        <h1>About Our Company</h1>
      </header>

      <section className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula mauris id
              eleifend. Proin quis justo non lectus varius eleifend ac id tellus. Vestibulum eget
              consectetur lectus.
            </p>
            <p>
              Phasellus lacinia felis in lectus auctor, in tristique arcu ultrices. In hac habitasse
              platea dictumst. Duis vehicula consectetur vehicula.
            </p>
          </div>
          <div className="col-md-6">
            {/* Add an image of your team or company here */}
            <img src="company-image.jpg" alt="Company Image" className="img-fluid" />
          </div>
        </div>
      </section>

      <section className="mt-5">
        <h2>Our Successes</h2>
        <p>
          Here, you can highlight some of your company's achievements and successes. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul>
          <li>Success 1</li>
          <li>Success 2</li>
          <li>Success 3</li>
        </ul>
      </section>

      <section className="mt-5">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please feel free to get in touch with us:</p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default AboutUsPage;
