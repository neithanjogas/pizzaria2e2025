import  { useState } from "react"
function App(){

  const [nome, setNome] = useState('Ronaldo')

return (
<div>
  <h3>PIzzaria 2E</h3>

  <input 
  className= "nome"
  onCharge={(e)=>{setNome(e.target.value)}}
  type="text" />


  <button 
    className="botao"
    onClick={()=>{alert(nome)}}
  >
    CLIQUE AQUI
  </button>

</div>
)



}

export default App