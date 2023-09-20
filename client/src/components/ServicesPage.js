import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage = () => {
  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Improve your website\'s search engine ranking and visibility.',
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage with your audience and build brand awareness on social media platforms.',
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable and relevant content to attract and retain customers.',
    },
  ];

  return (
    <div className="container">
      <header className="mt-5 text-center">
        <h1>Our Digital Marketing Services</h1>
      </header>

      <section className="mt-5">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
