/*I applied the funntion readline to store the User's option*/ 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout, 
});

function isPalindrome(word){
    const cleanedStr = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if(cleanedStr === cleanedStr.split('').reverse().join('')){
        return true;
    };

    return false;
};


readline.question('Please enter your word: ', input => {
    console.log(`You entered: ${input}`);
    console.log(isPalindrome(input));
    readline.close();
});