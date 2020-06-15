import React from "react";

// customer card
export const CustomerCard: React.FC = () => {
  return (
    <div className="accordion-row accordion-row-completed">
      <div className="flex-table flex-table-row">
        <div className="flex-row">
          <span className="customer-name">Milan</span>
        </div>
        <div className="flex-row">
          <span className="customer-name">Perera</span>
        </div>
        <div className="flex-row">
          <span className="customer-name">+94775127787</span>
        </div>
        <div className="flex-row">
          <span className="customer-name">01/05/1993</span>
        </div>
      </div>
    </div>
  );
};
