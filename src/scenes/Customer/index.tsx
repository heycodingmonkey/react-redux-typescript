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
import { startAddCustomer, startRemoveCustomer } from "../../actions/customers";
import { bindActionCreators } from "redux";

type Props = LinkDispatchProps & LinkStateProps;

// this will list down all the customers added
const Customer: React.FC<Props> = (props) => {
  const [viewModal, setViewModal] = useState<boolean>(false);
  const { customers } = props;
  const handleModal = () => {
    setViewModal(!viewModal);
  };

  const onSubmitValues = (values: CusInterface) => {
    // save values in redux
    props.addCustomer(values);
    // close modal
    handleModal();
  };

  return (
    <div className="customer-view-wrapper">
      <Header handleModal={handleModal} />
      <SearchNavbar />
      <FlexTable customers={customers} />
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

interface LinkStateProps {
  customers: CusInterface[];
}
interface LinkDispatchProps {
  addCustomer: (customer: CusInterface) => void;
  removeCustomer: (id: string) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  customers: state.customers,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  addCustomer: bindActionCreators(startAddCustomer, dispatch),
  removeCustomer: bindActionCreators(startRemoveCustomer, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
