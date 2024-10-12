const req = {
    body : {
        name : "Test",
        umur : 22,
        jurusan : "TI"
    }
}

const {name, umur, jurusan} = req.body;

console.log(name, umur, jurusan);
