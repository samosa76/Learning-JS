//create resource variable
var gajiPokok = 0;
var tunjangan = 0;
const data = [
    {
        "golongan": "A",
        "status": "nikah",
    },
    {
        "golongan": "B",
        "status": "belum",
    },
];

//using loop to get each object
for (let index = 0; index < data.length; index++) {
    //get golongan and status from array
    var golongan = data[index].golongan;
    var status = data[index].status;

    //processing gaji by golongan
    if (golongan == "A") {
        gajiPokok = 10000000;
    } else if (golongan == "B") {
        gajiPokok = 8000000;
    }
    else {
        gajiPokok = 5000000;
    }

    //check if tunjangan
    if (status == "nikah") {
        if (golongan == "A") {
            tunjangan = 2000000;
        } else if (golongan == "B") {
            tunjangan = 1500000;
        }
        else {
            tunjangan = 1000000;
        }
    }
    else {
        tunjangan = 0;
    }
    //Total Gaji
    total = totalGaji(gajiPokok, tunjangan);

    //print result for each data
    console.log(`Data ${index + 1}
        Golongan = ${golongan}
        Status = ${status}
        Gaji Pokok = ${gajiPokok}
        Tunjangan = ${tunjangan}
        total = ${total}`);
    
}

function totalGaji(_gaji, _tunjangan){
    total = _gaji + _tunjangan
    return total;
}

// console.log(data);


//get data.length data array
// const golongan = data.golongan;

//handling gaji by golongan
// if (golongan == "A") {
//     gajiPokok = 10000000;
//     console.log("Gaji Pokok = 10.000.000");
// } else if (golongan == "B") {
//     gajiPokok = 8000000;
//     console.log("Gaji Pokok = 8.000.000");
// } else {
//     gajiPokok = 5000000;
//     console.log("Gaji Pokok = 5.000.000");
// }

//get status from data array
// const statusTunjangan = data.status;

//check if status nikah or not
// if (statusTunjangan == "nikah") {
//handling tunjangan by golongan
//     if (golongan == "A") {
//         tunjangan = 2000000;
//         console.log("Tunjangan = 2.000.000");
//     } else if (golongan == "B") {
//         tunjangan = 1500000;
//         console.log("Tunjangan  = 1.500.000");
//     } else {
//         tunjangan = 1000000;
//         console.log("Tunjangan = 1.000.000");
//     }
// };

//print total gaji
// console.log(`Total : ${gajiPokok + tunjangan}`);

