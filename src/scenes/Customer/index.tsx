import React, { useState } from "react";
// components
import { Header } from "../../components/Header/Header";
import { FlexTable } from "../../components/FlexTable/FlexTable";
import { SearchNavbar } from "../../components/SearchNavbar/SearchNavBar";
import { Modal } from "../../components/Modal/Modal";
// interfaces
import { Customer as CusInterface } from "../../types/Customer";
// styles
import "../../assets/scenes/customer.scss";
import { AppState } from "../../store/configStore";
import { AppActions } from "../../types/actions";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import {
  startAddCustomer,
  startRemoveCustomer,
  startEditCustomer,
} from "../../actions/customers";
import { bindActionCreators } from "redux";

// combining props
type Props = LinkDispatchProps & LinkStateProps;

// this will list down all the customers added
const Customer: React.FC<Props> = (props) => {
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [isEdit, setModalType] = useState<boolean>(false);
  const [selectedCustomer, setSelectedCustomer] = useState<CusInterface>({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dob: new Date(),
  });
  const { customers } = props;
  const handleModal = (modalType: boolean) => {
    setModalType(modalType);
    setViewModal(!viewModal);
  };

  const onSubmitValues = (values: CusInterface) => {
    // save values in redux
    props.addCustomer(values);
    // close modal
    handleModal(false);
  };

  const onDeleteCustomer = (value: string) => {
    props.removeCustomer(value);
  };

  const openEditModal = (value: CusInterface) => {
    setSelectedCustomer(value);
    setModalType(true);
    setViewModal(true);
  };

  const onEditCustomer = (value: CusInterface) => {
    props.editCustomer(value);
    setSelectedCustomer({
      id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      dob: new Date(),
    });
    setModalType(false);
    setViewModal(false);
  };

  return (
    <div className="customer-view-wrapper">
      <Header handleModal={handleModal} />
      <SearchNavbar />
      <FlexTable
        deleteCustomer={onDeleteCustomer}
        openModal={openEditModal}
        customers={customers}
      />
      {viewModal ? (
        <Modal
          isEdit={isEdit}
          handleModal={handleModal}
          onSubmitForm={onSubmitValues}
          selectedCustomer={selectedCustomer}
          onEditCustomer={onEditCustomer}
        />
      ) : null}
    </div>
  );
};

interface LinkStateProps {
  customers: CusInterface[];
}
interface LinkDispatchProps {
  addCustomer: (customer: CusInterface) => void;
  removeCustomer: (id: string) => void;
  editCustomer: (customer: CusInterface) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  customers: state.customers,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  addCustomer: bindActionCreators(startAddCustomer, dispatch),
  removeCustomer: bindActionCreators(startRemoveCustomer, dispatch),
  editCustomer: bindActionCreators(startEditCustomer, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
