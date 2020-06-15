import React from "react";

// styles
import "../../assets/components/header.scss";
// this will list down all the customers added
export const Header: React.FC = () => {
  return (
    <div className="table-header-wrapper">
      <div className="header-title-wrapper">
        <div className="header-title">Customers</div>
      </div>
      <div className="button-wrapper">
        <button className="button">Add Customer</button>
      </div>
    </div>
  );
};
