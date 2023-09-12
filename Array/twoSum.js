function twoSum(arr,targetSum){
    let i=0;
    while(i<arr.length){
        let flag=false;
        let j=i+1;
        while(j<arr.length){
            console.log(arr[i],arr[j])
            if(arr[i]+arr[j]===targetSum){
                flag=true;
                break;
            }
            j++;
        }
        if(flag){
            console.log("Found the value",arr[i],arr[j])
            break;
        }
        i++;
    }
}