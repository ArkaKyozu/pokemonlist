
import { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';

function App() {


  const [pokemons, setPokemon] = useState([]);
  const  aoPokemonAdicionado= (pokemon) => {
    console.log(pokemon);
    setPokemon([...pokemons, pokemon]);
  }


  return (
    <div className="App">
      <Banner/>
      <Formulario aoPokemonCadastrado = {pokemon => aoPokemonAdicionado(pokemon)} />
      
    </div>
  );
}

export default App;
