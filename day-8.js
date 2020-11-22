function processData(input) {
    const dividirInput = input.split("\n");
    const phoneBookTamanho = +dividirInput[0];
    const inputValue = dividirInput.slice(phoneBookTamanho + 1);
    const temp = dividirInput.slice(1, phoneBookTamanho + 1).map(list => {
       var resultado = {
           name: list.split(" ")[0],
           phoneNumber: list.split(" ")[1]
       } 
       return resultado;
    });
    
    var phoneBook = [];
    for (var list of temp) {
        phoneBook[list.name] = list.phoneNumber;
    }
    
    for (var name of inputValue) {
        if (phoneBook[name]) {
            console.log(`${name}=${phoneBook[name]}`);
        } else {
            console.log("Not found");
        }
    }
} 