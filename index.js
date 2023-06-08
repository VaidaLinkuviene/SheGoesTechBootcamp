// FIRST FUNCTION

const ifStatements = () =>{
if(amount < 0){
    console.log("Less than zero");
} else if(amount>0){
    console.log("More than zero");
}else{
    console.log("Zero")
}
return amount;
}

// SECOND FUNCTION

const functionWithArguments = (firstName, lastName, age) =>{
    console.log(firstName.toUpperCase());
    console.log(lastName.slice(0, 1));
    console.log(age.toString());
}

functionWithArguments("Vaida", "Linkuviene", 34);

// THIRD FUNCTION

const animal = {
    species: "cat",
    name: "Micy",
    age: 4,
}

const objectFunction = () => {
   let catsName =  `My ${animal.species}'s name is ${animal.name}`;
   return catsName;
}
