/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Hero.scss';
import Typist from 'react-typist';

const Hero = () => {
  return (
    <div className="main-container">
      <Typist
        className="typist"
        cursor={{
          show: true,
          blink: true,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 250
        }}
      >
        <a className="name">
          I'm <span>Iván Roldán Lusich.</span>
        </a>
        <br />
        <a className="country">Argentina.</a>
        <br />
        <a className="full-stack">
          <span>Full-stack</span> Web Developer.
        </a>
      </Typist>
    </div>
  );
};

export default Hero;
