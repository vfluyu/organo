import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Form.css'

function Formulario(props) {
    const [nome, setnome] = useState('')
    const [cargo, setcargo] = useState('')
    const [imagem, setimagem] = useState('')
    const [time, settime] = useState('')
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                valor={nome} 
                aoAlterado={valor => setnome(valor)} 
                need={true} 
                label="Nome" 
                placeholder="Digite seu nome" />
                <CampoTexto 
                valor={cargo} 
                aoAlterado={valor => setcargo(valor)} 
                need={true} 
                label="Cargo" 
                placeholder="Digite seu cargo" />
                <CampoTexto 
                valor={imagem} 
                aoAlterado={valor => setimagem(valor)} 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" />
                <ListaSuspensa 
                need={true} 
                label="Time" 
                items={props.times} 
                valor={time} 
                aoAlterado={valor => settime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario