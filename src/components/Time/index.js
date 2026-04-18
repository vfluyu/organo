import './Time.css'
import Colaborador from '../Colaborador';

function Time(props) {
    return (
        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderBlockColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} key={colaborador.nome} />)}
            </div>
        </section>
    )
}
export default Time