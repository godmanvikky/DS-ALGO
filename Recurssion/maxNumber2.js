let max=0;
function maxNumber2(arr,index){
    if(index===arr.length-1){
        return max;
    }
    if(arr[index]>max){
        console.log(`${arr[index]}> ${max}`)
        max=arr[index]
    }
    return maxNumber2(arr,index+1)
}
console.log(maxNumber2([2,30,100,270,1,23,4],0))