import React from "react";

// components
import { FlexTableHeader } from "../FlexTable/FlexTableHeader";
import { FlexTableContent } from "../../components/FlexTable/FlexTableContent";
// perfect scrollbar
import Scrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
// styles
import "../../assets/components/flexTable.scss";
import { Customer } from "../../types/Customer";
// this will list down all the customers added

interface Props {
  customers: Customer[];
  deleteCustomer: (value: string) => void;
  openModal: (value: Customer) => void;
  searchText: string;
}

export const FlexTable: React.FC<Props> = (props) => {
  return (
    <div className="flex-table-container">
      <FlexTableHeader />
      <Scrollbar>
        <FlexTableContent {...props} />
      </Scrollbar>
    </div>
  );
};
