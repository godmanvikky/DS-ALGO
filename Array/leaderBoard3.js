let max=-Infinity;
function leaderBoradArray3(arr,i){
    if(i>arr.length){
        return max;
    }
    max=leaderBoradArray3(arr,i+1)
    if(arr[i]>max){
        max=arr[i];
        console.log(max)
    }
    return max;
}
leaderBoradArray3([16, 17, 4, 3, 5, 2],0)