import React, { useState } from "react";

// this will list down all the customers added
export const FlexTableHeader: React.FC = () => {
  const [tableHeaders] = useState<{ name: string }[]>([
    { name: "First Name" },
    { name: "Last Name" },
    { name: "Phone Number" },
    { name: "Date of Birth" },
    { name: "Actions" },
  ]);

  return (
    <div className="flex-table flex-table-header">
      {tableHeaders.map((header, key) => {
        return (
          <div key={key} className="flex-row">
            {header.name}
          </div>
        );
      })}
    </div>
  );
};
