import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
  const [formulario, setFormulario] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [target.name]: target.value,
    });
  };

  return { formulario, handleChange };
};
