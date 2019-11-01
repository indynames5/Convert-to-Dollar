

function converter (BAHT) {
    if(typeof BAHT === 'number'){
        var DOLLAR = BAHT*0.03
        return '$'+DOLLAR.toFixed(2);
    } 
    else return 'error';
}

module.exports = converter;