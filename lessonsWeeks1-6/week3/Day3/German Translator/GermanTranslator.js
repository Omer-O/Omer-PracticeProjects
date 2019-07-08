
(function() {
    function askForNumber() {
        var num = prompt('Please enter a number between 1 and 10');
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error('Bad number');
    }
    function translateToGerman() {
        var germanNumber = ["ein", "zwei", "drei", "vier", "funf", "sechs", "siben", "acht", "neun", "zen"];
    try {
        var number = askForNumber();
        console.log(germanNumber[number -1]);
    } catch (e) {
        console.log(e);
        translateToGerman();
    }
 }translateToGerman();
})();
