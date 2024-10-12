import {index, store}  from "./controller.mjs";

const main = () => {
     const user = {nama: "Tegar", umur: 21}
    store(user)
    index();

}



main();