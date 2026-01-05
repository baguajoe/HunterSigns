import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Moqups</div>
      <nav>
        <a href="#option1">Option One</a>
        <a href="#option2">Option Two</a>
        <a href="#option3">Option Three</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
};

export default Header;
