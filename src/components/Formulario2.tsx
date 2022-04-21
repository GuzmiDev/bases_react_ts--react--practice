import { useForm } from "../hooks/useForm";

interface FormData {
  postal: string;
  ciudad: string;
}

export const Formulario2 = () => {
  const { formulario, handleChange } = useForm<FormData>({
    postal: "3124",
    ciudad: "Chih",
  });

  const { postal, ciudad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Código postal:</label>
        <input
          type="email"
          className="form-control"
          name="postal"
          onChange={handleChange}
          value={postal}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ciudad:</label>
        <input
          type="email"
          className="form-control"
          name="ciudad"
          onChange={handleChange}
          value={ciudad}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
