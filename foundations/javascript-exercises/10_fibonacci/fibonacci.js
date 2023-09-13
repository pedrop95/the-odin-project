const fibonacci = function(num) {
    if (num<0){
        return 'OOPS'
    }
    function generateFibonacci(num){
        let sequence = [1,1];
        let number = 0;
        for (i=1;i<num;i++){
            number = sequence[i] + sequence[i-1];
            sequence.push(number);
        }
        return sequence;
    }
    let pick=generateFibonacci(num);
    return pick[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
