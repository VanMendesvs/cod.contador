import React, {useState} from "react" //importando o useState
import "./Contador.css"
//Hook: Tem funcionalidade e permite manipulaçoes de diversos recursos do React em um componente funcional
//Hook useState: Trabalha com estados, e os estados sao os que armazenam valores.

function Contador () { // criando uma função

    //Sintaxe useState
    const [numero, setNumero] =useState(0)

    //Funçao para adicionar um valor no botão +
    function Adicionar() {
            if(numero < 20) {
           setNumero(numero + 1)
            }
    }

     //Funçao para subtrair um valor no botão -
     function Subtrair() {
        if(numero > 0) {
        setNumero(numero - 1)
        }
    }

    //Função para limpar contador
    function Limpar() {
        setNumero(0)
    }

     return (
    <section className="contador">
    <h2> Contador </h2>
    <h1 className="numero"> {numero} </h1>
    <div className="boxButton">
    <button id="btn1" onClick={Adicionar}> + </button>
    <button id="btn2" onClick={Subtrair}> - </button>
    <button id="btn3" onClick={Limpar}> Limpar </button>  
    </div> 
    </section>
    
    )
}

export default Contador