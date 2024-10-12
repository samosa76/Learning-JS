function download() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Downloading');
            
        }, 3000);    
    })
    
}

function verify() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Verify');
            
        }, 2000);  
    });
}

function notify() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Notify');
            
        }, 4000);    
    });
}



function main() {
    download().then((result) => {
        console.log(result);
        return verify();
        
    }).then((result) => {
        notify();
    }).catch((error) => {
        console.log(error);
        
    })
}

main();