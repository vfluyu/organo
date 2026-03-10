import './index.css'
function CampoTexto (props) {


    function aoDigitado(event){
        props.aoAlterado(event.target.value) 
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.need} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto