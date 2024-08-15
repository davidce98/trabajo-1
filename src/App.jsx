import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './Contador'
import ListaUsuarios from './ListaUsuarios'

function App() {
  const usuarios = [
    {nombre: 'Juan Perez', edad: 30, profesion: 'Ingeniero'}, 
    {nombre: 'Ana Garcia', edad: 25 , profesion: 'Diseñadora'},
    {nombre: 'Luis Rodriguez', edad: 35, profesion: 'Profesor'}
  ]

  return (
    
    <>
    <h1>Lista de usuarios</h1>
    <ListaUsuarios usuarios = {usuarios}/>
    <h1>Tarjetas de contadores</h1>
    <Contador/>

    </>
    )
}

export default App
