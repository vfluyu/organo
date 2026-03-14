import './Time.css'
function Time(props){
    return(
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBlockColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}
export default Time