import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioPage = () => {
  // Sample portfolio data
  const portfolioItems = [
    {
      title: 'Campaign 1',
      description: 'Description of Campaign 1.',
      analytics: {
        visitors: 1000,
        conversions: 100,
      },
    },
    {
      title: 'Campaign 2',
      description: 'Description of Campaign 2.',
      analytics: {
        visitors: 2000,
        conversions: 150,
      },
    },
    {
      title: 'Campaign 3',
      description: 'Description of Campaign 3.',
      analytics: {
        visitors: 1500,
        conversions: 120,
      },
    },
  ];

  return (
    <div className="container">
      <header className="mt-5 text-center">
        <h1>Our Portfolio</h1>
      </header>

      <section className="mt-5">
        {portfolioItems.map((item, index) => (
          <div className="card mb-4" key={index}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p>Visitors: {item.analytics.visitors}</p>
              <p>Conversions: {item.analytics.conversions}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage;
