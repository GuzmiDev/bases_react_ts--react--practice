import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Fernando Herrera",
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuari: useState</h3>

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>

      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};
