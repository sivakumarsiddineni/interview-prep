let arr = [
    { name:'A', class: 5 },
    { name:'B', class: 6 },
    { name:'C', class: 5 },
    { name:'D', class: 6 },
];

function getDataGroup(arr){
    let map  = new Map();
    for(let item of arr){
        if(!map.has(item.class)){
            map.set(item.class,{ name:[], class: item.class});
        }
        map.get(item.class).name.push(item.name);
    }

    return Array.from(map.values())
}
console.log(getDataGroup(arr))

// [ { name: [ 'A','C' ], class: 5 },  { name: [ 'D','B' ], class: 6}]
// render props in react js 
// what is ECMA script 
// toples in typecript 