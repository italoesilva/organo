import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    return(
        
        <section className='Time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time