import React, { useState, useEffect, useContext } from 'react';


const benefits = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping on all your orders.',
    },
    {
      icon: '📞',
      title: 'Customer Support 24/7',
      description: 'Instant access to Support',
    },
    {
      icon: '🔐',
      title: '100% Secure Payment',
      description: 'We ensure your money is safe',
    },
    {
      icon: '📦',
      title: 'Money-Back Guarantee',
      description: '30 Days Money-Back Guarantee',
    },
  ];

const Benefits = () => {
    useEffect(() => {
    }, []);

    return (
        <>
            <section className="benefits-section">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
    );
};

export default Benefits;