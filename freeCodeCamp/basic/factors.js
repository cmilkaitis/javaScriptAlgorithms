function factorNum(num) {
    for (let i = 1; num >= 1; num--) {
        i = num * i;
    }
    return i;
}

function factorWithRecursion(num) {
    if (i <= 1) {
        return 1;
    }
    return num * factorWithRecursion(num - 1);
}