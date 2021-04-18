//Returning boolean
function isPassing(grade){
    if (grade >= 10){
        return true;
    }else{
        return false;
    }
}

isPassing(12);
console.log(isPassing(12));

// refactor example 

function isPassing2(grade){
    return grade >= 10;
}
isPassing2(12);
console.log(isPassing2(12));
