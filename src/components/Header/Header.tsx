import React from "react";

// styles
import "../../assets/components/header.scss";

interface Props {
  handleModal?: () => void;
}
// this will list down all the customers added
export const Header: React.FC<Props> = ({ handleModal }) => {
  return (
    <div className="table-header-wrapper">
      <div className="header-title-wrapper">
        <div className="header-title">Customers</div>
      </div>
      <div className="button-wrapper">
        <button onClick={handleModal} className="add-button">
          Add Customer
        </button>
      </div>
    </div>
  );
};
