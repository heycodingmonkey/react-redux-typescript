import React, { useState } from "react";

import "../../assets/components/searchNavbar.scss";
// search nav bar to handle search

interface Props {
  onChangeSearchText: (value: string) => void;
}

export const SearchNavbar: React.FC<Props> = (props) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    setSearchText(value);

    props.onChangeSearchText(value);
  };
  return (
    <div className="filter-section">
      <div className="search-filter">
        <input
          value={searchText}
          onChange={handleChange}
          className="search-input"
          type="text"
          placeholder="Search"
        />
        <button className="search-button">
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
};
