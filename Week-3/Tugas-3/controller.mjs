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
}


//delete last index of array
const destroy = () => {
    users.splice(users.length - 1, 1);
    // for (const user of users) {
    //     console.log(user);
    // }
}

export { index, create, destroy };