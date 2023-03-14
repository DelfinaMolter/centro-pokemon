import React from "react";
import { useDispatch, useStore } from "../../Hooks/ContextoFormulario";


const Detalle = () => {
  const store = useStore()
  const dispatch = useDispatch()

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {store.entrenador?.nombre}</p>
          <p>Apellido: {store.entrenador?.apellido}</p>
          <p>Email: {store.entrenador?.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {store.pokemon?.nombrePokemon}</p>
          <p>Tipo: {store.pokemon?.tipoPokemon}</p>
          <p>Elemento: {store.pokemon?.elementoPokemon}</p>
          <p>Altura: {store.pokemon?.alturaPokemon}</p>
          <p>Edad: {store.pokemon?.edadPokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={(e) => {
          e.preventDefault();
          // dispatch()
          dispatch({
            type:'reset'
          })
          console.log(store.entrenador)
          console.log(store.pokemon)
          alert("Solicitud enviada :)")
          }
        }
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
