function countPairs(arr,targetedSum){
    let i=0;
    let obj={};
    let count=0;
    while(i<arr.length){
        if(obj[arr[i]]){
            obj[arr[i]]+=1;
        }
        else{
         obj[arr[i]]=1   
        }
        i++;
    }
    i=0;
    while(i<arr.length){
        let currentSum = targetedSum-arr[i]
        if(obj[currentSum]){
            count= count+obj[currentSum]
        }
        i++;
    }
    return count/2;
}
countPairs([1,-2,1,0,5],6)