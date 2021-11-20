let dinheiro_disponivel = parseInt(prompt("Digite o valor disponivel"))
let valor_da_compra = parseInt(prompt("Digite o valor da compra "))
let dinheiro_restante = dinheiro_disponivel - valor_da_compra
if(dinheiro_disponivel >= valor_da_compra){
    dinheiro_disponivel = dinheiro_disponivel - valor_da_compra
    alert(`compra realiza , saldo restante e de ${dinheiro_restante} reais`)
}


else {alert("dinheiro insuficiente")
}