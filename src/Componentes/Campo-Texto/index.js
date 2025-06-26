
import './Campo-Texto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`;

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return (
        <div className='campo-texto'>
            <label> 
                {props.label}
            </label>
            <input 
                placeholder={placeholderModificado}
                value={props.valor}
                onChange={aoDigitar}
                required={props.obrigatorio}

            />
        </div>
    )
}

export default CampoTexto;