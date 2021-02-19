import React from "react";
import { ReactComponent as Bookmark } from "./../images/icon-bookmark.svg";
import logomc from "./../images/logo-mastercraft.svg";

const Header = ({ toggleModal, handleBookmark, bookmarked }) => {
  return (
    <header className="header">
      <div className="box">
        <img src={logomc} alt="" className="header__logo" />

        <h1 className="heading-primary header__title">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="header__text">
          A beautiful &amp; handcrafted monitor stand to reduce neck and eye
          strain.
        </p>
        <div className="header__bottom">
          <button className="cta-btn" onClick={toggleModal}>
            Back this project
          </button>
          <button
            className={
              bookmarked
                ? "header__bookmark header__bookmark--active"
                : "header__bookmark"
            }
            aria-label="bookmark"
            onClick={handleBookmark}
          >
            <Bookmark className="header__bookmark-img" />

            <span className="header__bookmark-book">
              {bookmarked ? "Bookmarked" : " Bookmark"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
