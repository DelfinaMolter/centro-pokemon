const getPokemon = async()=>{
    const data = await fetch('https://pokeapi.co/api/v2/type/')
    .then((res)=>res.json()) 
    .catch((e) => "error");
    return data
}

export default getPokemon;