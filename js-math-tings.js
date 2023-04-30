function positiveNegativeOrZero(number) {
    if (!Number.isInteger(number)) {
        console.log("Number must be an integer!");
    }

    if (number > 0) {
        console.log(`${number} is positive.`);
    } else if (number < 0) {
        console.log(`${number} is negative.`);
    } else {
        console.log(`${number} is zero.`);
    }
}

function positive(number) {
    if (!Number.isInteger(number)) {
        console.log("Number must be an integer!");
    }

    return number > 0;
}

function zero(number) {
    if (!Number.isInteger(number)) {
        console.log("Number must be an integer!");
    }

    return number == 0;
}

function zeroAlternativeWithoutMessage(number) {
    return number === 0;
}

function zeroAlternativeWithMessage(number) {
    return number === 0 ? true : console.log("Number must be an integer!");
}

function negative(number) {
    if (!Number.isInteger(number)) {
        console.log("Number must be an integer!");
    }

    return number < 0;
}
