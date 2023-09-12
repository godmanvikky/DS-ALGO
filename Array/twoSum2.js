function twoSum(arr,sum){
    let i=0;
    let s =new Set();
    while(i<arr.length){
        let currentSum=sum-arr[i];
        if(s.has(currentSum)){
            console.log(arr[i],currentSum)
            break;
        }
        s.add(arr[i]);
        i++;
    }
}
twoSum([0, -1, 2, -3, 1],3)