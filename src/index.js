const input = prompt("Введіть вік:");
const lastNumber = parseInt(input);

if (!isNaN(lastNumber)) {
    if (lastNumber < 0) {
        console.log("Будь ласка, введіть правильний вік.");
    } else {
        let yearsForm;

        if (lastNumber === 1 || (lastNumber % 10 === 1 && lastNumber % 100 !== 11)) {
            yearsForm = "рік";
        } else if (
            (lastNumber >= 2 && lastNumber <= 4) ||
            ((lastNumber % 10 >= 2 && lastNumber % 10 <= 4) && (lastNumber % 100 < 10 || lastNumber % 100 >= 20))
        ) {
            yearsForm = "роки";
        } else {
            yearsForm = "років";
        }

        console.log(`Вам ${lastNumber} ${yearsForm}`);
    }
}