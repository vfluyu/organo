import './ListaSuspensa.css'

function ListaSuspensa(props){
    
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.need} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa