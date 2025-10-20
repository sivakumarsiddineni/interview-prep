const data = {
  name: "Siva",
  details: {
    age: 30,
    address: {
      city: "Hyderabad",
      area: {
        landmark: "Main Road",
        pincode: 500001
      }
    }
  }
};

// array flat infinity without this method
function recursiveIteration(arr){
    for (let data of arr){
         if(Array.isArray(data)){
          recursiveIteration(data)
          }else{
              console.log(data)
          }
    }
}
recursiveIteration([1,2,3,[4,5,6,[7,8,[10,11]]],9]);


function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], newKey, result); // recursion
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const flat = flattenObject(data);
console.log(flat);
