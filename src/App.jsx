import  { useState } from "react"
function App(){

  const [nome, setNome] = useState('Ronaldo')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState('pokemonas')
  const [pi] = useState(3.14)

  //var idade = 18;
  //let time = 'pokemonas'
  //const pi = 3.14;

  const Formulario = (props)=> {
    const [valor, setValor] = useState()
   

    return (
      <div>
        <input 
  className= "nome"
  placeholder={props.sombra}
  onChange={(e)=>{setValor(e.target.value)}}
  type="text" />


  <button 
    className="botao"
    onClick={()=>{
      if(valor.length > 0)
        alert(valor);
      else
      alert(props.nome + 'idade é ' + props.idade)}}
  >
    CLIQUE AQUI
  </button>
        
      </div>

    )
  }

return (
<div>
  <h3>PIzzaria 2E</h3>

    <Formulario nome="Ricardessobas"
    idade={45}
    sombra="Digite nome..." />
    <Formulario nome="miliguidas" sombra="Digite sua idade..." />
    <Formulario nome="venessarias" sombra="Digite seu time..." />
    <Formulario nome="gustavaiusamariados" sombra="valor de pi" />

</div>
)



}

export default App