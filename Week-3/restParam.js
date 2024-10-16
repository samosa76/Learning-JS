function sum(...numbers) {
    let hasil = 0;
    for (const number of numbers) {
        hasil += number;
    }
    return hasil;
}

console.log(sum(1,2,3,4,5));

function showFamilies(wife, husband, ...childrens) {
    console.log(`Suami : ${husband}`);
    console.log(`Istri : ${wife}`);
    for (const children of childrens) {
        console.log(`Anak : ${children}`);       
    }
}

showFamilies("Rei", "Sam", "children 1", "children 2", "children 3", "children 4");

const test = ["amama", 'nati', "minnie"]

