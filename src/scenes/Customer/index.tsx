import React from "react";

// components
import { Header } from "../../components/Header/Header";
import { FlexTable } from "../../components/FlexTable/FlexTable";
import { SearchNavbar } from "../../components/SearchNavbar/SearchNavBar";
// styles
import "../../assets/scenes/customer.scss";

// this will list down all the customers added
function Customer() {
  return (
    <div className="customer-view-wrapper">
      <Header />
      <SearchNavbar />
      <FlexTable />
    </div>
  );
}

export default Customer;
