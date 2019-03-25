const id = 100;

// // EQUAL TO
// if(id == 100){
//     console.log('CORRECT');
    
// }
// else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 100){
//     console.log('CORRECT');
    
// }
// else {
//     console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID ${id}`);
// } else{
//    console.log('NO ID'); 
// }

// Greater or LESS THAN

// if(id >= 100){
//         console.log('CORRECT');
        
//     }
//     else {
//         console.log('INCORRECT');
//     }

// IF ELSE
const color = 'yellow';

// if (color === 'red') {
//     console.log('color is red');
// } else if (color === 'blue'){
//     console.log('color is blue');
// } else {
//     console.log('Color is not RED or BLUE');
// }

// LOGICAL OPERATORS
const name = 'Claudia';
const age = 25;

if (age > 0 && age < 18){
    console.log(`${name} is too young for me`);

} else if(age > 18 && age <= 25){
    console.log(`I have to Marry ${name} Quick!`);
} else {
    console.log(`Gotta keep Praying for a beautiful ${name}`);
}

// OR ||
if (age < 16 || age > 65 ){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR ?
console.log(id === 100 ? 'CORRECTO' : 'INCORRECTO' ); // : Means ELSE

// WITHOUT BRACES  NOT SUGGESTED THO
if (id === 100)
    console.log('CorrectoMundo');
else 
    console.log('IncorrectoMundo');