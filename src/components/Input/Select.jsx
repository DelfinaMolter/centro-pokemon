import { useDispatch } from "../../Hooks/ContextoFormulario";

const Select =({name, label, atribute, data})=>{
    const dispatch = useDispatch()

    const onBlur = (e) => {
        dispatch({
            type: e.target.getAttribute('att'),
            payload: {[e.target.name]: e.target.value}
        })
    };

    return(
        <div className="input-contenedor">
            <label htmlFor={name}>{label}</label>
            <select name={name} onBlur={onBlur} >
                <option value="tipo" selected disabled>Seleccione un tipo de Pokemon</option>
                {
                    data.map((item, index)=>{
                        console.log(item)
                        return <option value={item.name} key={index} att={atribute}>{item.name} </option>
                    })
                }
            </select>
        </div>
    )
}

export default Select;