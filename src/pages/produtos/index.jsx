import axios from 'axios'
import {useEffect, useState} from 'react'

const Produtos = () => {
axios.get('http://172.19.0.49/pizzariaoficial/api/v1/produto')
.then((response)=>{
    alert(JSON.stringfy(response))
})
    //Consumir os produtos do endpoint (rota)
        useEffect = (() => {


        }, []);     


   //Objetos que possui lista de pizzas
    const pizzas = [
        "Pizza de galinha",
        "Pizza de Almoçarela",
         "Pizza de Calabreso",
         "Pizza opaivei",
         "Pizza orapois",
        "Pizza de Atum", "Pizza de Seis Queijos"

];
    //Mapeamento das pizzas da lista (interaçao)
    const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);

    return(
     <>
        <h3>Listagem de Produtos</h3>
    <ul>
        {listaPizzas}
    </ul>
        
  </>


    )
}

export default Produtos