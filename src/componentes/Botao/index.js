import './Botao.css'

const form = document.querySelector('form')

form.onsubmit = ()

const Botao = (props) => {
    return (<button className='botao'>
        {props.children}
    </button>)

}

export default Botao