
function titlelize(array, callback) {
    let result = array.map(el => `Mx. ${el} Jingleheimer Schmidt`);
    callback(result);
    return result;
}

const printCallback = function(array) {
    array.forEach(element => console.log(element))
};

let result = titlelize(["Mary", "Brian", "Leo"], printCallback);
 
console.log(result);
