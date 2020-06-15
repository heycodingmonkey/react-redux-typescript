import React, { useState } from "react";

// components
import { Header } from "../../components/Header/Header";
import { FlexTable } from "../../components/FlexTable/FlexTable";
import { SearchNavbar } from "../../components/SearchNavbar/SearchNavBar";
import { Modal } from "../../components/Modal/Modal";
// styles
import "../../assets/scenes/customer.scss";

// this will list down all the customers added
export const Customer: React.FC = () => {
  const [viewModal, setViewModal] = useState<boolean>(false);

  const handleModal = () => {
    setViewModal(!viewModal);
  };

  return (
    <div className="customer-view-wrapper">
      <Header handleModal={handleModal} />
      <SearchNavbar />
      <FlexTable />
      {viewModal ? <Modal handleModal={handleModal} open={viewModal} /> : null}
    </div>
  );
};
