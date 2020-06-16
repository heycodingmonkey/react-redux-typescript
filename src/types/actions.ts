import { Customer } from "../types/Customer";

export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";
export const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export interface AddCustomerAction {
  type: typeof ADD_CUSTOMER;
  customer: Customer;
}

export interface EditCustomerAction {
  type: typeof EDIT_CUSTOMER;
  customer: Customer;
}

export interface RemoveCustomerAction {
  type: typeof REMOVE_CUSTOMER;
  id: string;
}

export type CustomerActionTypes =
  | AddCustomerAction
  | EditCustomerAction
  | RemoveCustomerAction;

export type AppActions = CustomerActionTypes;
