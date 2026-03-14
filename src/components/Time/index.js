import './Time.css'
import Colaborador from '../Colaborador';

function Time(props){
    return(
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBlockColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='colaboradores'>
                    <Colaborador 
                        nome="vfluyu" 
                        cargo="Desenvolvedor" 
                        imagem='https://github.com/vfluyu.png'
                    />
                </div>
        </section>
    )
}
export default Time