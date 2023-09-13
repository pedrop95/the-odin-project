const palindromes = function (str) {
    const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
