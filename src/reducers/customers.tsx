import { Customer } from "../types/Customer";
import {
  ADD_CUSTOMER,
  REMOVE_CUSTOMER,
  EDIT_CUSTOMER,
  CustomerActionTypes,
} from "../types/actions";

const customersReducerDefaultState: Customer[] = [];

const customerReducer = (
  state = customersReducerDefaultState,
  action: CustomerActionTypes
): Customer[] => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.customer];
    case REMOVE_CUSTOMER:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_CUSTOMER:
      return state.map((customer) => {
        if (customer.id === action.customer.id) {
          return {
            ...customer,
            ...action.customer,
          };
        } else {
          return customer;
        }
      });

    default:
      return state;
  }
};

export { customerReducer };
