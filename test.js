//create resource variable
var gajiPokok = 0;
var tunjangan = 0;
const data = {
    "golongan" : "C",
    "status" : "nikah"
};

//get golongan from data array
const golongan = data.golongan;

//handling gaji by golongan
if(golongan == "A"){
    gajiPokok = 10000000;
    console.log("Gaji Pokok = 10.000.000");
} else if (golongan == "B"){
    gajiPokok = 8000000;
    console.log("Gaji Pokok = 8.000.000");
} else {
    gajiPokok = 5000000;
    console.log("Gaji Pokok = 5.000.000");
}

//get status from data array
const statusTunjangan = data.status;

//check if status nikah or not
if (statusTunjangan == "nikah") {
    //handling tunjangan by golongan
    if(golongan == "A"){
        tunjangan = 2000000;
        console.log("Tunjangan = 2.000.000");
    } else if (golongan == "B"){
        tunjangan = 1500000;
        console.log("Tunjangan  = 1.500.000");
    } else {
        tunjangan = 1000000;
        console.log("Tunjangan = 1.000.000");
    }
};

//print total gaji 
console.log(`Total : ${gajiPokok + tunjangan}`);

