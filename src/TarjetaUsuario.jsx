import React from "react";

function TarjetaUsuario({nombre, edad, profesion}){
 return (
    <div style={{ border: '12px solid #ccc', padding: '8px', margin: '13px 0', background: 'grey'}}>
        <h3>{nombre}</h3>
        <p>Edad: {edad}</p>
        <p>Profesión: {profesion}</p>
    </div>
    );
}

export default TarjetaUsuario