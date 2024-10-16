import users from "./data.mjs";

//get all index data using for of
// const index = () => {
//     for (const user of users) {
//         //get every object and put it in new variable
//         const { nama, umur, alamat, email } = user;

// console.log("Nama : "+nama);
// console.log("Umur : " + umur);
// console.log("Alamat : " + alamat);
// console.log("Email : " + email);
// console.log("=====================================");
//     }

// }
const defaultCount = users.length;
var countIndex, countCreate, countDelete;

const index = () => {
    users.map(user => {
        const { nama, umur, alamat, email } = user;
        console.log("Nama : " + nama);
        console.log("Umur : " + umur);
        console.log("Alamat : " + alamat);
        console.log("Email : " + email);
        console.log("=====================================");

    });
    
}

const create = () => {
    users.push(
        {
            nama: "Kita",
            umur: "24",
            alamat: "Bandung",
            email: "kita@gamil.com"
        },
        {
            nama: "Fatih",
            umur: "21",
            alamat: "Cileungsi",
            email: "fatih@gamil.com",
        }
    );
    countCreate = users.length;
    
}


//delete last index of array
const destroy = () => {
    users.splice(users.length - 1, 1);
    // for (const user of users) {
    //     console.log(user);
    // }
    countDelete = users.length;
}

const indexCount = () => {
    console.log(`Jumlah awal data : ${defaultCount}`);
    console.log(`Jumlah data setelah menghapus 1 data : ${countDelete}`);
    console.log(`Jumlah data setelah create 2 data : ${countCreate}`);
    
    
}

export { index, create, destroy, indexCount };