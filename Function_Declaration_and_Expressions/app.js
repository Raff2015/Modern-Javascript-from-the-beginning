// FUNCTION DECLARATIONS

// function greet(firstName, lastName){
//     // console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName; 
// }

// console.log(greet('Benny', 'Chicas')); 

// ES6 Style
function greet(firstName = 'America', lastName = 'Chicas'){
    
    return 'Hello ' + firstName + ' ' + lastName; 
}

// console.log(greet()); 

// FUNCTION EXPRESIONS
const square = function(x = 3){ // x = 3 as the default
    return x*x;
};
// console.log(square());

// IMMEDIATELTY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IFFE Ran..');
// })(); // TO RUN IT MUST HAVE ();

// (function(name){
//     console.log('Hello ' + name);
// })('Edgar'); 

// PROPERTY METHODS
const todo = {
    add: function(){
      console.log('Add todo ..')  
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log(`Delete todo ...`);
}

todo.add();
todo.edit(22);
todo.delete();

