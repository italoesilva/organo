import './CampoTexto.css'

const CampoTexto = (props) => {


const placeholderModificada = `${props.placeholder}...`


    return (
        <div className="campo-texto">
            <label>
                {props.label}
                </label>

            <input required={props.obrigatorio} placeholder={`${props.placeholder}...`}></input>

        </div>


    )
}

export default CampoTexto