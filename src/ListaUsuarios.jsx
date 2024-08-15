import React from "react";
import TarjetaUsuario from "./TarjetaUsuario";

function ListaUsuarios({usuarios}){
    return(
        <div>
            {usuarios.map((usuario,index) => ( 
                <TarjetaUsuario
                key={index}
                nombre={usuario.nombre}
                edad={usuario.edad}
                profesion={usuario.profesion}
                />
            ))}
        </div>
    )
}

export default ListaUsuarios