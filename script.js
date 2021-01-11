const first = ["Cast Away","Rocky","Inception","The Postman","Million Dollar Baby"];
const second = ['improved','very differnet','exceptional','a flop'];
const third = ['Jim Carrey','Eddie Murphy','Adam Sandler','Chris Rock','Robin Williams','Ben Stiller','Bill Murry','Simon Pegg','Ricky Gervais','Jack Black','Mike Myers'];


const sentance = (array) => {
    choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

console.log(`The film ${sentance(first)},`);
console.log(`would have been ${sentance(second)},`);
console.log(`if they would have cast ${sentance(third)} as the leading man.`);