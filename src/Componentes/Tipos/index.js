import Pokemon from '../Pokemon';
import './Tipos.css';


const Tipos = (props) =>{

    const css = { backgroundColor: props.corSecundaria }

    
    return (
    
       (props.pokemons.length > 0)? 
       
       <section className='tipos' style={css}>
            <h3 style={{borderColor: props.corPrimaria}} > {props.nome}</h3>
            <div className='pokemons'>
                <button>
                {props.pokemons.map(pokemon => <Pokemon nome={pokemon.nome} imagem={pokemon.imagem} tipo={pokemon.tipo} key={pokemon.nome}/>)}
                </button>
            </div>     
        </section>
        : ''
    )
}

export default Tipos;