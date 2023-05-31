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