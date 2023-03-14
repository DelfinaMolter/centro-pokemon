import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types"

/**
 * @typedef {object} inicialState
 * @property {entrenador | undefined}  entrenador
 * @property {pokemon | undefined}  pokemon
 */

/**
 * @typedef {object} entrenador
 * @property {string} nombre
 * @property {string} apellido
 * @property {string} email
 */

/**
 * @typedef {object} pokemon
 * @property {string} nombrePokemon
 * @property {string} tipoPokemon
 * @property {string} elementoPokemon
 * @property {number} alturaPokemon
 * @property {number} edadPokemon
 */

/**
 * Objeto inicial con el que se renderiza por primera vez el formilario.
 * @type {inicialState}
 */
const initialState = {
    entrenador:{
        nombre: '',
        apellido: '',
        email: ''
    },
    pokemon:{
        nombrePokemon: '',
        tipoPokemon: '',
        elementoPokemon: '',
        alturaPokemon: null,
        edadPokemon: null
    }
}

/**
 * 
 * @typedef {object} action
 * @property {string} type
 * @property {object} payload
 */

/**
 * @description Funcion Reductora donde actualiza la infomacion del entrenador y del pokemon.
 * @param {inicialState} state 
 * @param {action} action 
 * @returns {inicialState}
 */
const contextReducer = (state, action)=>{
    switch (action.type){
        case 'ACTUALIZAR_ENTRENADOR':
            return {
                ...state, 
                entrenador: { ...state.entrenador, ...action.payload}
            }
        case 'ACTUALIZAR_POKEMON':
            return{
                ...state, 
                pokemon: { ...state.pokemon, ...action.payload}
            }
        case 'reset':
            return initialState
        default :
            return state
    }
}


export const ContextoFormulario = createContext([])

export const ContextProvider = ({children})=>{

    const [store, dispach] = useReducer(contextReducer, initialState )

    return(
        <ContextoFormulario.Provider value={[store, dispach]}>
            {children}
        </ContextoFormulario.Provider>
    )
}


export const useStore = ()=> useContext(ContextoFormulario)[0]
export const useDispatch = ()=> useContext(ContextoFormulario)[1]

ContextProvider.protoType = {
    children: PropTypes.element.isRequired
}