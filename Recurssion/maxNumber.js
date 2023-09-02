function getMax(arr,index){
    if(index===arr.length-1){
        return arr[index]
    }
    let x = arr[index]
    let y = getMax(arr,index+1)
    if(x>y){
        console.log(`${x}>${y}=${x}`)
        return x;
    }
    else{
        console.log(`${x}<${y}=${y}`)
        return y
    }
}
console.log(getMax([2,30,100,27,1,23,4],0))