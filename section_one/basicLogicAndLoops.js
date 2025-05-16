/**The approach for this exercise is to verify the number first, if compatible with 2 numbers (3,5), then if the condition is
   FALSE then, go to the next condition and compare each number separately**/  


for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');

    }

    else if(i % 3 == 0){

        console.log('Fizz');

    }

    else if(i % 5 == 0){

        console.log('Buzz');

    }

    else{
        
        console.log(i);
    }
}
    
