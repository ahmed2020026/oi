/* function remainder(n, m){
    let result1; 
    let word = '';
    if(n < m){
        [n , m] = [m , n];
        result1 = n-parseInt(n/m)*m;
        word +=`${result1}` + ' , The order the arguments are passed should not matter';
        return word;
    }
    else if(m === 0 || n === 0){
        return word += 'Divide by zero should return NaN'
    }
    else{
        result1 = n-parseInt(n/m)*m;
        word += `Returned value should be the value left over after dividing as much as possible. For input n = ${n}, m = ${m}`;
        return result1.toString() +" , "+ word;
    }
} */

function convert(num) {
    let word = ''
    for (let i = 0; i <= 8; i++) {
        if(Number.isInteger(num/2)){
            word +='0';
            num = parseInt(num / 2);
        }
        else{
            word += '1';
            num = parseInt(num / 2);
        }
    }
    return word.split('').reverse().join("");
}
function bitsiseAND(n1, n2) {
    let number1 = n1 & n2;
    let new_Num = convert(number1)
    return new_Num;
}

console.log(bitsiseAND(7,12));