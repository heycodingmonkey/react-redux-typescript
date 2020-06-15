import React from "react";

// components
import { FlexTableHeader } from "../FlexTable/FlexTableHeader";
import { FlexTableContent } from "../../components/FlexTable/FlexTableContent";
// perfect scrollbar
import Scrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
// styles
import "../../assets/components/flexTable.scss";
// this will list down all the customers added
export const FlexTable: React.FC = () => {
  return (
    <div className="flex-table-container">
      <FlexTableHeader />
      <Scrollbar>
        <FlexTableContent />
      </Scrollbar>
    </div>
  );
};
