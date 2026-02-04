
function genericFunc<T>(args:T):T{
    return args;
}

let output22 = genericFunc<string>('hello');

console.log(output22,'output string');

let output2 = genericFunc<number>(233);

console.log(output2,'output2 number');


let output3 = genericFunc<boolean>(true);

console.log(output3,'output3 boolean');

interface Box<T> {
    value: T
}

let boxOutput1 : Box<number> = { value: 7677 };

let boxOutput2 : Box<string> = { value: 'Siva Here' };

console.log(boxOutput1,'boxOutput1');

console.log(boxOutput2,'boxOutput2');

//Generic Constraints

interface lengthy {
    length : number 
}

function getLengthy<T extends lengthy>(item:T):number{
    return item.length;
} 

console.log(getLengthy('hello word'));

console.log(getLengthy([1,2,2,2]));


// Partail TS 
interface personalDetails {
    name: 'Siva',
    lastName : 'Siddineni',
    address: [ 'manikonda', 'Tansha Nagar','TS' ]
}

type  personalInfo = Partial<personalDetails>

const lessInfo : personalInfo = {
     name: 'Siva',
     lastName : 'Siddineni',
}

console.log(lessInfo)






