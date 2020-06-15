import React from "react";

import "../../assets/components/searchNavbar.scss";
// search nav bar to handle search
export const SearchNavbar: React.FC = () => {
  return (
    <div className="filter-section">
      <div className="search-filter">
        <input className="search-input" type="text" placeholder="Search" />
        <button className="search-button">
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
};
