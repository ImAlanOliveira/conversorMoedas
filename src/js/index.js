
function tipoDeConversao(event){
    event.preventDefault();


    let escolha = document.getElementById('tipoConversao').value;
    
    let valorElemento = document.getElementById('valor').value;

    let valorEmNumerico = parseFloat(valorElemento);

    let conversao = 0;



    if (escolha == 1 ){
       conversao = valorEmNumerico / 4.73;
     
       let valorElementoConvertido = document.getElementById('valorConvertido');
       let valorConvertido = "O resultado é US$" + conversao.toFixed(2);
       valorElementoConvertido.innerHTML = valorConvertido;

    }else if (escolha == 2){
        conversao = valorEmNumerico * 4.73;

        let valorElementoConvertido = document.getElementById('valorConvertido');
        let valorConvertido = "O resultado é R$" + conversao.toFixed(2);
        valorElementoConvertido.innerHTML = valorConvertido;

    }else if (escolha == 3){
        conversao = valorEmNumerico / 5.25;

        let valorElementoConvertido = document.getElementById('valorConvertido');
        let valorConvertido = "O resultado é €" + conversao.toFixed(2);
        valorElementoConvertido.innerHTML = valorConvertido;

    }else if (escolha == 4){
        conversao = valorEmNumerico * 5.25;

        let valorElementoConvertido = document.getElementById('valorConvertido');
        let valorConvertido = "O resultado é R$" + conversao.toFixed(2);
        valorElementoConvertido.innerHTML = valorConvertido;

    }else if (escolha == 5){
        conversao = valorEmNumerico * 0.90;

        let valorElementoConvertido = document.getElementById('valorConvertido');
        let valorConvertido = "O resultado é €" + conversao.toFixed(2);
        valorElementoConvertido.innerHTML = valorConvertido;

    }else if (escolha == 6){
        conversao = valorEmNumerico / 0.90;

        let valorElementoConvertido = document.getElementById('valorConvertido');
        let valorConvertido = "O resultado é US$" + conversao.toFixed(2);
        valorElementoConvertido.innerHTML = valorConvertido;
    }else if (escolha == 0){
        alert('Por favor, escolha o tipo de conversão.')
    }
    
    if(valorElemento == ""){
        alert("Por favor, digite um número no campo correpondente.")
        let valorElementoConvertido = document.getElementById('valorConvertido');
        valorElementoConvertido.innerHTML = ""
    }

}

document.getElementById('tipsForm').addEventListener('submit', tipoDeConversao);


