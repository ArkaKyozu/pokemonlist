import './Pokemon.css'

const Pokemon = (props) => {
    return (
        <div className='pokemon'>
            <div className='cabecalho'>

            <img src={props.imagem} alt={props.nome}/>
            </div>

            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.tipo}</h5>
            </div>    
        </div>
    )
}

export default Pokemon;