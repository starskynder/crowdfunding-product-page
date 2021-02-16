import React from "react";
import { ReactComponent as Bookmark } from "./../images/icon-bookmark.svg";
import logomc from "./../images/logo-mastercraft.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="box">
        <img src={logomc} alt="logo" className="header__logo" />

        <h1 className="heading-primary header__title">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="header__text">
          A beautiful &amp; handcrafted monitor stand to reduce neck and eye
          strain.
        </p>
        <div className="header__bottom">
          <button className="cta-btn"> Back this project</button>
          <button className="header__bookmark">
            <Bookmark className="header__bookmark-img" />

            <span className="header__bookmark-book">Bookmark</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
