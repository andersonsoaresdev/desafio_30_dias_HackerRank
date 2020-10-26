function processData(input) {

    var resultado = input.split('\n').slice(1);
    resultado.forEach((parte) => {
        var primeiraParte = '';
        var segundaParte = '';
        for (var i = 0; i < parte.length; i++) {
            i % 2 ? segundaParte += parte[i] : primeiraParte += parte[i];
        }
        console.log(`${primeiraParte} ${segundaParte}`);
    });
}