import { useState } from "react";

export interface Customer {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dob: Date | Date[];
}

export const useForm = () => {
  // const [date, setDate] = useState<Date | Date[]>(new Date());

  const [values, setValues] = useState<Customer>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dob: new Date(),
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
