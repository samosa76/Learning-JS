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
    {
        "golongan": "C",
        "status": "nikah",
    },
    {
        "golongan": "B",
        "status": "belum",
    },
    {
        "golongan": "C",
        "status": "nikah",
    },
    {
        "golongan": "B",
        "status": "belum",
    },
    {
        "golongan": "C",
        "status": "nikah",
    },
    {
        "golongan": "A",
        "status": "belum",
    },
    {
        "golongan": "A",
        "status": "nikah",
    },
    {
        "golongan": "A",
        "status": "belum",
    },

];

//using loop to get each object
for (let index = 0; index < data.length; index++) {
    //get golongan and status from array
    var _golongan = data[index].golongan;
    var _status = data[index].status;

    //get gaji by golongan using function wages
    gajiPokok = wages(_golongan);

    //get tunjangan by status and golongan using function tunjanganWages
    tunjangan = tunjanganWages(_status, _golongan);


    //get total gaji using function
    total = totalGaji(gajiPokok, tunjangan);

    //print result for each data
    console.log(showAllData(index,_golongan, _status, gajiPokok, tunjangan, total));

}


/*
Handling all data 
*/

function showAllData(_index, _golongan, _status, _gajiPokok, _tunjangan, _total) {
    return `
    Nama = Data ${_index + 1}
    Golongan = ${_golongan}
    Status = ${_status}
    Gaji Pokok = ${_gajiPokok}
    Tunjangan = ${_tunjangan}
    total = ${_total}`;
}
//logical function to sum all wages
function totalGaji(_gaji, _tunjangan) {
    total = _gaji + _tunjangan
    return total;
}

//logical function to determine gaji by golongan
//get paramater golongan and store in _golongan
function wages(_golongan) {
    //check golongan value
    var _gajiPokok;
    if (_golongan == "A") {
        _gajiPokok = 10000000;
    } else if (_golongan == "B") {
        _gajiPokok = 8000000;
    }
    else {
        _gajiPokok = 5000000;
    }
    //return result for gajiPokok value
    return _gajiPokok;
}

function tunjanganWages(_status, _golongan) {
    var _gajiTunjangan;
    if (_status == "nikah") {
        if (_golongan == "A") {
            _gajiTunjangan = 2000000;
        } else if (_golongan == "B") {
            _gajiTunjangan = 1500000;
        }
        else {
            _gajiTunjangan = 1000000;
        }
    } else {
        _gajiTunjangan = 0;
    }
    return _gajiTunjangan;
}