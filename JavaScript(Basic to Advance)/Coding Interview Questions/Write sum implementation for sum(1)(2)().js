// Q. Write sum implementation for sum(1)(2)()

const sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
};
console.log(sum(1)(2)());
//Output : 3



