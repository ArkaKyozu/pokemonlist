
import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Tipos from './Componentes/Tipos';

function App() {        

  const tipos = [
    { nome: 'Fogo', corPrimaria: '#F08030', corSecundaria: '#F67828' },
    { nome: 'Agua', corPrimaria: '#6890F0', corSecundaria: '#78C0F0' },
    { nome: 'Eletrico', corPrimaria: '#F8D030', corSecundaria: '#F8D030' },
    { nome: 'Grama', corPrimaria: '#78C850', corSecundaria: '#A8D878' },
    { nome: 'Gelo', corPrimaria: '#98D8D8', corSecundaria: '#A0E0E0' },
    { nome: 'Psíquico', corPrimaria: '#F85888', corSecundaria: '#F88084' },
    { nome: 'Dragão', corPrimaria: '#7038F8', corSecundaria: '#B8A0F8' },
    { nome: 'Noturno', corPrimaria: '#705848', corSecundaria: '#A89088' },
    { nome: 'Inseto', corPrimaria: '#A8B820', corSecundaria: '#B2C22C' },
    { nome: 'Terrestre', corPrimaria: '#E0C068', corSecundaria: '#E0C068' },
    { nome: 'Voador', corPrimaria: '#A890F0', corSecundaria: '#B2A0F8' },
    { nome: 'Metálico', corPrimaria: '#B8B8D0', corSecundaria: '#C0C0D0' },
    { nome: 'Fada', corPrimaria: '#EE99AC', corSecundaria: '#F4B1C1' },
    { nome: 'Fantasma', corPrimaria: '#705898', corSecundaria: '#907AA9' },
    { nome: 'Pedra', corPrimaria: '#B8A038', corSecundaria: '#D1B06D' },
    { nome: 'Lutador', corPrimaria: '#C03028', corSecundaria: '#D04030' },
    { nome: 'Normal', corPrimaria: '#A8A878', corSecundaria: '#B2B270' },
    { nome: 'Veneno', corPrimaria: '#A040A0', corSecundaria: '#B060B0' },
    { nome: 'Aço', corPrimaria: '#B8B8D0', corSecundaria: '#C0C0D0' },
    { nome: 'Sombrio', corPrimaria: '#705848', corSecundaria: '#A89088' }
  ];        
  

  const [pokemons, setPokemon] = useState([]);

  const  aoPokemonAdicionado= (pokemon) => {
    console.log(pokemon);
    setPokemon([...pokemons, pokemon]);
  }


  return (
    <div className="App">
      <Banner/>
      <Formulario tipos={tipos.map(tipo => tipo.nome)} aoPokemonCadastrado = {pokemon => aoPokemonAdicionado(pokemon)} />
       {tipos.map(tipo => <Tipos 
        key={tipo.nome} 
        nome={tipo.nome} 
        corPrimaria={tipo.corPrimaria} 
        corSecundaria={tipo.corSecundaria} 
        pokemons={pokemons.filter(pokemon => pokemon.tipo === tipo.nome)}
      />)}  
    </div>
  )
}

export default App;
