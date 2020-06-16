import { v1 as uuid } from "uuid";
import { Customer } from "../types/Customer";
import {
  ADD_CUSTOMER,
  AppActions,
  REMOVE_CUSTOMER,
  EDIT_CUSTOMER,
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configStore";

export const addCustomer = (customer: Customer): AppActions => ({
  type: ADD_CUSTOMER,
  customer,
});

export const removeCustomer = (id: string): AppActions => ({
  type: REMOVE_CUSTOMER,
  id,
});

export const editCustomer = (customer: Customer): AppActions => ({
  type: EDIT_CUSTOMER,
  customer,
});

export const startAddCustomer = (customerData: {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  dob?: Date | Date[];
}) => {
  console.log(customerData);

  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const {
      firstName = "",
      lastName = "",
      phoneNumber = "",
      dob = new Date(),
    } = customerData;
    const customer = { firstName, lastName, phoneNumber, dob };

    const id = uuid();

    return dispatch(
      addCustomer({
        id,
        ...customer,
      })
    );
  };
};

export const startRemoveCustomer = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeCustomer(id));
  };
};

export const startEditCustomer = (customer: Customer) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editCustomer(customer));
  };
};
