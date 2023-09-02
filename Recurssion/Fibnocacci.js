let str;
function fib(N){
    if(N===0||N===1){
        return N;
    }
    let sum=fib(N-1) + fib(N-2);
    console.log(`fib(${N-1})+fib(${N-2})=${sum}`)
    return sum;
}
console.log(fib(10))