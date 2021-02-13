/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import logo from "./../images/logo.svg";
import close from "./../images/icon-close-menu.svg";
import open from "./../images/icon-hamburger.svg";

const Navigation = ({ openMenu, toggleMenu }) => {
  return (
    <nav className={openMenu ? "navigation navigation__open" : "navigation"}>
      <div className="navigation__nav">
        <div className="navigation__logo">
          <img src={logo} alt="crowdfund logo" />
        </div>
        <button
          className="navigation__menu"
          onClick={toggleMenu}
          aria-expanded={openMenu ? true : false}
          aria-controls="menu-list"
          aria-label="open the menu"
        >
          {openMenu ? (
            <span className="navigation__menu-close">
              <img src={close} alt="close menu" />
            </span>
          ) : (
            <span className="navigation__menu-open">
              <img src={open} alt="open menu" />
            </span>
          )}
        </button>
      </div>

      <ul
        id="menu-list"
        className={
          openMenu
            ? "navigation__list navigation__list-open"
            : "navigation__list"
        }
        role="list"
      >
        <li className="navigation__list-item">
          <a href="#about" className="navigation__link" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li className="navigation__list-item">
          <a href="#discover" className="navigation__link" onClick={toggleMenu}>
            Discover
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            href="#getstarted"
            className="navigation__link"
            onClick={toggleMenu}
          >
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
