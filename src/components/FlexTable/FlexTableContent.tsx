import React from "react";

// components
import { CustomerCard } from "../CustomerCard/CustomerCard";
import { Customer } from "../../types/Customer";
// this will list down all the customers added

interface Props {
  customers: Customer[];
}
export const FlexTableContent: React.FC<Props> = (props) => {
  const { customers } = props;

  return (
    <div className="scroll-padding">
      {customers.map((customer, key) => {
        return <CustomerCard customer={customer} key={customer.id} />;
      })}
    </div>
  );
};
