
import { useDispatch} from "../../Hooks/ContextoFormulario";
import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react";

/**
 * 
 * @param {object} props Propiedades del componente
 * @param {string} props.name Nombre del campo de entrada
 * @param {string} props.label Etiqueta que describe el campo de entrada
 * @param {string} [props.type="text"] Tipo de campo de entrada
 * @param {string} props.atribute Tipo de reductor
 * @param {boolean} [props.reference=false] Tipo de reductor
 * @returns {JSX.Element} Componente de entrada
 */
const Input = ({ name, label, type = "text",atribute , reference=false}) => {
  const nameRef =useRef(null)

  const [valueInput, setValueInput] = useState('')
  const dispatch = useDispatch()

  console.log('att: ' + atribute)

  useEffect(()=>{
    if(reference){
      nameRef.current.focus();
    }
  },[])


  const onChange = (e) => {
    setValueInput(e.target.value)
  };

  const onBlur = (e) => {
    dispatch({
      type: e.target.getAttribute('att'),
      payload: {[e.target.name]: e.target.value}
    })

  };



  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={valueInput}
        id={name}
        name={name}
        att={atribute}
        ref={reference? nameRef: null}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;


Input.propTypes ={
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  atribute: PropTypes.string.isRequired,
  reference: PropTypes.bool
}