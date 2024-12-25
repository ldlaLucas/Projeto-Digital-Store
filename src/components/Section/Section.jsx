import React from 'react';
import './styles.css';

const Section = ({ title, titleAlign, children, link }) => {
  return (
    <section className="section">
      <h2 className={`section-title ${titleAlign}`}>{title}</h2>

      {link && (
          <a href={link.href} className="section-link ">
            {link.text}
          </a>
        )}

      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
