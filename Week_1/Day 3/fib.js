//Thomas Reiter's function
function fibonacci (num) {
    let prev = 0;
    let current = 1;
    let counter = 1;
    if(num != 0){
        console.log(current);
        while(counter < num) {
            let next = prev + current;
            console.log(next);
            prev = current;
            current = next;
            counter++;
        }
    }
}

fibonacci(10);


//Miguel's function
const fibbonaci10 = () => {
    let nums = [0, 1];

    for (let i = 2; i < 10; i++) {
        let num = nums[i-1] + nums[i-2];
        nums.push(num);
    }
    return nums;
};

console.log(fibbonaci10());