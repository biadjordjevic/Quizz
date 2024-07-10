let botão =  document.getElementById ('botao')

function Finalizar(){

let valor1 = Number(document.getElementById('selectMenu').value)
let valor2 = Number(document.getElementById('selectMenu2').value)
let valor3 = Number(document.getElementById('selectMenu3').value)
let pontos = valor1 + valor2 + valor3;






if (pontos === 6) {
    alert('Parabéns! Você alcançou a pontuação máxima! :D')
    document.getElementById('pontuacao').value = 3;
}

else if(pontos == 4 ){
    alert('Quiz Finalizado! Confira sua pontuação :)')
    document.getElementById('pontuacao').value = 1;
}
else if(pontos == 5){
    alert('Quiz Finalizado! Confira sua pontuação :)')
    document.getElementById('pontuacao').value = 2;
}

else if(pontos == 3){
    alert('Quiz Finalizado! Confira sua pontuação e continue tentando :)')
    document.getElementById('pontuacao').value = 0;
}
else if (valor1 === 0 && valor2 === 0 && valor3 === 0) {
    alert('Responda todas as perguntas antes de obter o resultado');
    
}

}
