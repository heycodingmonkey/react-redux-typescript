import React from "react";

// components
import { FlexTableHeader } from "../FlexTable/FlexTableHeader";
// styles
import "../../assets/components/flexTable.scss";
// this will list down all the customers added
export const FlexTable: React.FC = () => {
  return (
    <div className="flex-table-container">
      <FlexTableHeader />
    </div>
  );
};
