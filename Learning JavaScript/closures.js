function makeAddFunctin(firstNumber) {

    return function returnedFunction(secondNumber) {
        return firstNumber + secondNumber;
    }
}

const add5 = makeAddFunctin(5);

console.log(add5(7));

function addThreeNumber (n1, n2){

    return function returnedFunction(n3){
        return n1 + n2 + n3;
    }
}

const add = addThreeNumber(5, 5);

console.log(add(5));