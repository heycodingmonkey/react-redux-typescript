import React from "react";

// components
import { CustomerCard } from "../CustomerCard/CustomerCard";
// this will list down all the customers added
export const FlexTableContent: React.FC = () => {
  return (
    <div className="scroll-padding">
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
    </div>
  );
};
