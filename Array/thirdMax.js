//Find the third max for an unsortted array.
function thirdMax(arr){
    if(arr.length<1){
        return 0;
    }
    else{
        let firstMax = -Infinity;
        let secondMax = -Infinity;
        let thirdMax = -Infinity;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>firstMax){
                thirdMax =secondMax;
                secondMax = firstMax;
                firstMax = arr[i];
            }
            else if(arr[i]>secondMax && arr[i]<firstMax){
                thirdMax =secondMax;
                secondMax=arr[i]
            }
            else if(arr[i]>thirdMax && arr[i]<secondMax){
                thirdMax =arr[i];
            }

            }
            return {firstMax,secondMax,thirdMax}
        }
    }
    thirdMax([1,23,34,42,23,1,2,23,4,23,34,34])