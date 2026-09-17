import { useState } from "react"

//Array de objetos contendo o estado inicial do cardapio
const cardapio =[
    {id:1,nome:"Combo-01", preço:25.00, disponivel:true, quantidade:0},
    {id: 2, nome: "Combo-02", preço: 30.00, disponivel: true, quantidade:0},
    {id: 3, nome: "Combo-03", preço: 35.00, disponivel: false, quantidade:0},
    {id: 4, nome: "Combo-04", preço: 40.00, disponivel: true, quantidade:0},
]

const Pedido = () => {

    //HOOK- useState-Manipula o estado da variavel
    //Exemplo vai gerenciar a listas de items do cardapio
    const [items, setItems]=useState(cardapio);
    const [status, setStatus]=useState("");
    const [enviar, setEnviar]=useState(false);

    //valor fixo adicionado ao total quando tiver items no carrinho
    const taxaEntrega=5.00;

    //função que altera a quantidade do pedido
    const AlterarQuantidade =(id, valor)=>{
        setItems(prev=>
            //Map: percorre a lista para criar um novo array sem modificar o original
            prev.map(item=>
                //ternário: verifica se o item da interação atual é o que deve ser alterado
                //spread(...item): adiciona o item a lista atual ou modifica
                //Math.max: objeto que garante que a quantidade nunca seja menor que 0
                //item: retorna o item intacto caso o id não corresponda 
                item.id===id ? {...item,quantidade:Math.max(0,item.quantidade + valor)} : item
            )
        )
    }


  return (
    <>
    
    </>
  )
}

export default Pedido