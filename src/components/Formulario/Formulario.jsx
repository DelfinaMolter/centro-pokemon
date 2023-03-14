import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import Select from "../Input/Select";
import { useQuery } from "react-query";
import getPokemon from "../../Hooks/getPokemon";


const Formulario = () => {
  const {data} = useQuery(['tiposPokemon'], getPokemon)

  console.log(data?.results)

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" atribute="ACTUALIZAR_ENTRENADOR" reference={true}/>
              <Input name="apellido" label="Apellido" atribute="ACTUALIZAR_ENTRENADOR" />
              <Input name="email" label="Email" type="email" atribute="ACTUALIZAR_ENTRENADOR" />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombrePokemon" label="Nombre" atribute="ACTUALIZAR_POKEMON" />
              {/* {isLoading ? "cargando tipos de pokemon": <Select name="tipoPokemon" label="Tipo" att="ACTUALIZAR_POKEMON" data={data}/> }   */}
              {/* <Select name="tipoPokemon" label="Tipo" att="ACTUALIZAR_POKEMON" data={[{name:'1'},{name:'2'},{name:'3'}]}/> */}
              <Select name="tipoPokemon" label="Tipo" atribute="ACTUALIZAR_POKEMON" data={data?.results}/>
              <Input name="elementoPokemon" label="Elemento" atribute="ACTUALIZAR_POKEMON" />
              <Input name="alturaPokemon" label="Altura" type="number"  atribute="ACTUALIZAR_POKEMON" />
              <Input name="edadPokemon" label="Edad" type="number" atribute="ACTUALIZAR_POKEMON" />
            </div>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
