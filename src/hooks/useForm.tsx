import { useState } from "react";

import { Customer } from "../types/Customer";

export const useForm = (selectedCustomer: Customer) => {
  // const [date, setDate] = useState<Date | Date[]>(new Date());

  const [values, setValues] = useState<Customer>({
    ...selectedCustomer,
  });

  const setDateValue = (value: Date | Date[]) => {
    setValues({
      ...values,
      dob: value,
    });
  };

  // const setDateValue = (value: Date | Date[]) => {
  //   setDate(value);
  // };

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    setDateValue,
    handleChange,
    values,
  };
};
