const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number'||typeof num2 !== 'number') {
        return 'ERROR';
    }
    if (num1<0||num2<0){
        return 'ERROR'
    }
    if (num1>num2){
        let holder=0;
        holder=num1;
        num1=num2;
        num2=holder;
    }
    let range=[];
    for (i=num1;i<= num2;i++){
        range.push(i);
    }
    let each=range.length;
    let totalSum=0;
    for (i=0;i<each;i++){
        totalSum += range[i];
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
