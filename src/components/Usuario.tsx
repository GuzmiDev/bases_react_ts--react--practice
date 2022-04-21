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
    <div>
      <h3>Usuario</h3>

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>

      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};
