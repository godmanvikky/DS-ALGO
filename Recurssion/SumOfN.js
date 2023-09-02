function Sum(N){
    if(N==0){
        return 0;
    }
    return N+Sum(N-1);
}
console.log(Sum(5))
