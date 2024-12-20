import React from 'react';
import './styles.css';

const Section = ({ title, titleAlign, children }) => {
  return (
    <section className="section">
      <h2 className={`section-title ${titleAlign}`}>{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
