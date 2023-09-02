function factorial(n){
    if(n===0){
        return 1
    }
    let fact = n*factorial(n-1)
    console.log(`${n}*fact(${n-1})=${fact}`)
    return fact
}
console.log(factorial(5))