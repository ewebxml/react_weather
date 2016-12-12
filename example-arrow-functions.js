var names= ['Andrew', 'PandaBear', 'Jen'];

names.forEach(function(name){
    console.log(name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});
console.log('----- new notation -----');
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '#';
console.log(returnMe('Tom'));

var person = {
    name: 'Glenn',
    greet: function(){
        names.forEach ((name) =>{
            console.log(this.name + ' says hi to =' + name)
        });
    }
};
person.greet();

var addStatement = (a,b) => {
    return a + b;
}
console.log(addStatement (7, 11));
var addExpression = (x,y) => x+y;
console.log(addExpression (11, 13));
