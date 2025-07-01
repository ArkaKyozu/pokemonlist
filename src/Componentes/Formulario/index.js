import './Formulario.css'
import CampoTexto from '../Campo-Texto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'


const Formulario = (props) => {

    const [nome, setNome]= useState('')
    const [imagem, setImagem] = useState('')
    const [tipo, setTipo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoPokemonCadastrado({
            nome,
            imagem,
            tipo
        });
        setNome('');
        setImagem('');
        setTipo('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do Pokemon</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite o nome do Pokemon"
                    valor={nome}
                    obrigatorio={true}
                    aoAlterado={valor =>setNome(valor)}
                        
                /> 

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem do Pokemon"
                    valor={imagem}
                     obrigatorio={true}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    label="Tipo" 
                    itens = {props.tipos} 
                     obrigatorio={true}
                     valor={tipo}
                    aoAlterado={valor => setTipo(valor)}
                />

                <Botao>
                    Cadastrar Pokemon    
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;