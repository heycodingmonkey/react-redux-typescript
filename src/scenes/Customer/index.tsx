import React, { useState } from "react";

// components
import { Header } from "../../components/Header/Header";
import { FlexTable } from "../../components/FlexTable/FlexTable";
import { SearchNavbar } from "../../components/SearchNavbar/SearchNavBar";
import { Modal } from "../../components/Modal/Modal";

import { Customer as CusInterface } from "../../hooks/useForm";
// styles
import "../../assets/scenes/customer.scss";

// this will list down all the customers added
export const Customer: React.FC = () => {
  const [viewModal, setViewModal] = useState<boolean>(false);

  const handleModal = () => {
    setViewModal(!viewModal);
  };

  const onSubmitValues = (values: CusInterface) => {
    console.log(values);
    // save values on a reducer

    // close the modal
  };

  return (
    <div className="customer-view-wrapper">
      <Header handleModal={handleModal} />
      <SearchNavbar />
      <FlexTable />
      {viewModal ? (
        <Modal
          handleModal={handleModal}
          onSubmitForm={onSubmitValues}
          open={viewModal}
        />
      ) : null}
    </div>
  );
};
