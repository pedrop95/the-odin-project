const repeatString = function(text,number) {
    let string="";
    if (number<0){
        return 'ERROR'
    }
    for (let i=0;i<number;i++){
        string+=text;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;