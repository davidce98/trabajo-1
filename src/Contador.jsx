import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [toggle, setToggle] = useState(false);
  const [usuario, setUsuario] = useState({
    nombre: "",
    edad: 0,
    profesion: "",
  });

  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const actualizarUsuario = () => {
    setUsuario({
      nombre: "Juan Perez",
      edad: 30,
      profesion: "Ingeniero",
    });
  };

  const reiniciarUsuario =() => {
    setUsuario({
      nombre: "",
      edad: 0,
      profesion: ""
    })
  }
  const agregarTarea = () => {
    if (nuevaTarea) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };
  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };
  return (
    <div>
      <div style={{ border: '12px solid #ccc', padding: '8px', margin: '13px 0', background: 'grey'}}>
        <h2>Contador: {contador}</h2>
        <button style={{padding: '5px', margin: '5px 15px', background: '#ccc'}}  onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button style={{padding: '5px', margin: '5px 15px', background: '#ccc'}}  onClick={() => setContador(contador - 1)}>Decrementar</button>
      </div>
      
      <div style={{ border: '12px solid #ccc', padding: '8px', margin: '13px 0', background: 'grey'}}>
        <input
          style={{padding:'5px', marginRight: '30px'}}
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Nombre: {nombre}</p>
      </div>

      <div style={{ border: '12px solid #ccc', padding: '8px', margin: '13px 0', background: 'grey'}} >
        <button style={{padding: '2px', margin: '1px 0', background: '#ccc'}} onClick={() => setToggle(!toggle)}>
          {" "}
          {toggle ? "Ocultar" : "Mostrar"} Estado{" "}
        </button>
        <p> Estado : {toggle ? "True" : "False"}</p>
      </div>

      <div style={{ border: '12px solid #ccc', color:'black', padding: '8px', margin: '13px 0', background: 'grey'}}>
        
        <p> Nombre : {usuario.nombre} </p>
        <p> Edad : {usuario.edad} </p>
        <p> Profesion : {usuario.profesion} </p>
        <button style={{padding: '5px', margin: '3px 15px', background: '#ccc'}} onClick={actualizarUsuario}>Actualizar usuario</button>
        <button style={{padding: '5px', margin: '3px 15px', background: '#ccc'}} onClick={reiniciarUsuario}>Reiniciar usuario</button>
      </div>
      <div style={{ border: '12px solid #ccc', padding: '8px', margin: '13px 0', background: 'grey'}}>
        <input
          style={{padding:'5px', marginRight: '30px'}}
          type="text"
          placeholder="Nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button style={{padding: '2px', margin: '3px 10px', background: '#ccc'}} onClick={agregarTarea}>Agregar Tarea</button>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea} <button style={{padding: '5px', marginLeft: '115px', background: '#ccc'}}onClick={() => eliminarTarea(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Contador;
