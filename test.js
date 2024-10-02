gajiPokok = 0;
const tunjangan = 0;
const data = {
    "golongan" : "A",
    "status" : "nikah"
};

const golongan = data.golongan;

if(golongan == "A"){
    gajiPokok = 10000000;
    console.log("Gaji Pokok = 10.000.000");
} else if (golongan == "B"){
    console.log("Gaji Pokok = 8.000.000");
} else {
    console.log("Gaji Pokok = 5.000.000");
}

console.log(gajiPokok);