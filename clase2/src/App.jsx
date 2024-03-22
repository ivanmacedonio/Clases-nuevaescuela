import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [formValue, setFormValue] = useState("");
  const [apellido, setApellido] = useState("");

  useEffect(() => {
    setFormValue("Pagina recien cargada");
  }, []);

  function handleChange(event) {
    setInputValue(event.target.value);
    console.log(event);
  }

  function handleChangeApellido(event) {
    setApellido(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormValue(inputValue);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={handleChange} />
        <input type="text" name="" id="" onChange={handleChangeApellido} />
        <h2>
          Nombre = {formValue} apellido = {apellido}{" "}
        </h2>
        <button type="submit">Mostrar</button>
      </form>
    </div>
  );
};

export default App;
