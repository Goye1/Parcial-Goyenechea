import { useState } from 'react'
import './App.css'
import Card from './Card';

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [apellidoError, setApellidoError] = useState("");
  const [cards, setCards] = useState([]);

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
    setNombreError("");
  };

  const onChangeApellido = (e) => {
    setApellido(e.target.value);
    setApellidoError(""); 
  };

  const formHandler = (e) => {
    e.preventDefault();

    let isNombreValid = true;
    let isApellidoValid = true;

    if (nombre.trim() == "") {
      setNombreError("No se puede dejar espacios en blanco");
      isNombreValid = false;
    } else if (nombre.length < 3) {
      setNombreError("El nombre debe tener al menos 3 caracteres");
      isNombreValid = false;
    } else {
      setNombreError(""); 
    }

    if (apellido.length < 6) {
      setApellidoError("El apellido debe tener al menos 6 caracteres");
      isApellidoValid = false;
    } else {
      setApellidoError(""); 
    }

    if (isNombreValid && isApellidoValid) {
      setCards([...cards, { nombre, apellido }]);
      setNombre("");
      setApellido("");
    }
  };

  return (
    <div className="App">
      <h1>Crear usuario</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" value={nombre} onChange={onChangeNombre} />
        {nombreError && <p>{nombreError}</p>}
        <hr />
        <label htmlFor="usuario">Nombre de Usuario</label>
        <input type="text" name="usuario" value={apellido} onChange={onChangeApellido} />
        {apellidoError && <p>{apellidoError}</p>}
        <hr />
        <button type='submit'>Crear Card</button>
      </form>
      {cards.map((card, index) => (
        <Card key={index} nombre={card.nombre} apellido={card.apellido} />
      ))}
    </div>
  );
}

export default App;
