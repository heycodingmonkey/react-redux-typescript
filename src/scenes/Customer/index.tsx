import React from "react";

// components
import { Header } from "../../components/Header/Header";
import { FlexTable } from "../../components/FlexTable/FlexTable";
// styles
import "../../assets/scenes/customer.scss";

// this will list down all the customers added
function Customer() {
  return (
    <div className="customer-view-wrapper">
      <Header />
      <FlexTable />
    </div>
  );
}

export default Customer;
