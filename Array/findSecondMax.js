//SecondMax if the array is unsorted
function findSecondMax(arr){
    if(arr.length<=1){
        return 0
    }
    else{
        let firstMax=-Infinity;
        let secondMax=-Infinity;
        for(let i=0;i<arr.length;i++){
            if(firstMax<arr[i]){
                secondMax=firstMax;
                firstMax=arr[i];
            }
            else if(secondMax<arr[i]&& arr[i]<firstMax){
                secondMax=arr[i];
            }
        }
        return{
        secondMax,firstMax
    }
    }
}
findSecondMax([1,2,34,32,4,32])
