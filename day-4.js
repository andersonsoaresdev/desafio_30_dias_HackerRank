function Person(initialAge) {
    var age;
    if (initialAge > 0) {
        age = initialAge;
    } else {
        console.log('Age is not valid, setting age to 0.');
        age = 0;
    }

    this.amIOld = function () {
        if (age < 13) {
            console.log('You are young.');
        } else if (age >= 13 && age < 18) {
            console.log('You are a teenager.');
        } else {
            console.log('You are old.')
        }

    };
    this.yearPasses = function () {
        age += 1;
    };
}
