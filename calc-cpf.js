
bt.addEventListener('click',(evento) => {
    let bt = document.querySelector("button");
    let cpf = document.getElementById("cpf").value;
    var array = cpf.split('');
    var cpfVerificador = cpf.substr(9,10);
    var valor = 0;


    array.forEach(elemento => {
        valor = (10 * array[0]) + (9 * array[1] )+ (8 * array[2]) + (7 * array[3] ) + (6 * array[4]) + (5 * array[5] )+ (4 * array[6]) + (3 * array[7] )+ (2 * array[8]);
        soma = 11 - (valor % 11);

        valor2 = (11 * array[0]) + (10 * array[1] )+ (9 * array[2]) + (8 * array[3] ) + (7 * array[4]) + (6 * array[5] )+ (5 * array[6]) + (4 * array[7] )+ (3 * array[8]) + + (2 * array[9]);
        soma2 = 11 - (valor2 % 11);

    });
 
    console.log(soma);
    console.log(soma2);
    console.log(cpfVerificador);



    // 047 135 780 45
    
    
    


})

