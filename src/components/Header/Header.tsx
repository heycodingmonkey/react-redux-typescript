import React from "react";

// styles
import "../../assets/components/header.scss";

interface Props {
  handleModal: (value: boolean) => void;
}

// this will list down all the customers added
export const Header: React.FC<Props> = ({ handleModal }) => {
  const openModal = () => {
    handleModal(false);
  };
  return (
    <div className="table-header-wrapper">
      <div className="header-title-wrapper">
        <div className="header-title">Customers</div>
      </div>
      <div className="button-wrapper">
        <button onClick={openModal} className="add-button">
          Add Customer
        </button>
      </div>
    </div>
  );
};
