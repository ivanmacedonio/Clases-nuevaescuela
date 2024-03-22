import React, { useState } from "react";
export const Ternario = () => {
  const [iniciado, setIniciado] = useState(false);

  function handleIniciado() {
    setIniciado(!iniciado);
  }

  // useEffect(() => {
  //   alert("hola desde effect");
  // }, [iniciado]);

  return (
    <div>
      {iniciado ? <h1>iniciado</h1> : <h1>no iniciado</h1>}
      <button onClick={handleIniciado}>Cambiar session</button>
      <input type="text" />
    </div>
  );
};
