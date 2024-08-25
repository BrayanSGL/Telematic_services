const {frutas, dinero} = require('./frutas');
const cowsay = require("cowsay");

frutas.forEach((fruta, index) => {
    console.log(`${index + 1}. ${fruta}`);
});

console.log(`Dinero: ${dinero}`);

console.log(cowsay.say({
    text: "Hola Mundo",
    e: "oO",
    T: "U "
}));