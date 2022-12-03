let person={
   name:"sathish",
   age:27,
   intrest:"palying foodball and cricket",
   stats :"married",
greeting:function () {
    let  mgs='Hi  my  name is   '  +this.name+ 'my hoby ' + this.intrest;
console.log(mgs)
}
};
console.log(person.greeting());









//<----do-while--->
let i=1;
do {
    if (i % 2 !==0 ) {
        console.log("Number#"+i);

    }
    i++;
}while(i<=20)
//<----for in---->
/*const person ={
    name :'venkatesh',
    age: 21,
    sex:'male'

};
for( let key in person){
    console.log(key+";",person[key]);
}
*/
