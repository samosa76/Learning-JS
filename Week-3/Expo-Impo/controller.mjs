import  users from "./data.mjs";
const index = () => {
    console.log('Index of get all users');
    users.forEach(user => {
        
        console.log(user);
        
    });
}

const store = (user) => {
    users.push(user);
}

export {index, store};