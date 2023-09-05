//Second Max if the array is sorted
function findSecondMax(arr){
    if(arr.length<1){
        return 0;
    }
    else{
        let firstMax=arr[arr.length-1];
        let secondMax=-Infinity;
        let i=arr.length-2
        while(i>0){
            if(arr[i]==firstMax){
                i--;
            }
            else{
                secondMax = a[i];
                break;
            }
        }
        return{secondMax,firstMax}
    }
}
findSecondMax([1,2,3,32,32,32])