import { useState } from "react";

export default (defaultValue: string): useInputReturn => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};

export interface useInputReturn {
  value: string;
  onChange: (e: any) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
