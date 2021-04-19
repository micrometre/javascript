function chainToSwitch(val) {
    var answer = "";
    switch (val) {
    case "bob":
        answer = "Marley";
        break;

    case 42:
        answer = "The Answer";
        break;

    case 1:
        answer = "There is no #1";
        break;

    case 99:
        answer = "Missed me by this much!";
        break;

    case 7:
        answer = "Ate Nine";
        break;

    case "Jhon":
        answer = "";
        break;
    case 156:
        answer = "";
        break;

    }
    return answer;
}

chainToSwitch(7);

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
    case "a":
        answer = "apple";
        break;

    case "b":
        answer = "bird";
        break;
    case "c":
        answer = "cat";
        break;
    case "d":
    default:
        answer = "stuff";

    }
    return answer;
}

switchOfStuff(1);

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
    case 1:
    case 2:
    case 3:
        answer = "Low";
        break;
    case 4:
    case 5:
    case 6:
        answer = "Mid";
        break
    case 7:
    case 8:
    case 9:
        answer = "High"
    }
    return answer;
}
sequentialSizes(1);
