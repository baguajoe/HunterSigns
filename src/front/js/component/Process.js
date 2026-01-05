import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <section className="process">
      <h2>How We Work?</h2>
      <p>Establish customer trust by providing a clear explanation of your process.</p>
      <div className="steps">
        <div>
          <h3>01</h3>
          <p>Concept</p>
        </div>
        <div>
          <h3>02</h3>
          <p>Wireframe</p>
        </div>
        <div>
          <h3>03</h3>
          <p>Prototype + Testing</p>
        </div>
        <div>
          <h3>04</h3>
          <p>Solution</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
