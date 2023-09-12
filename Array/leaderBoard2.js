//Traversing from last 
function leaderBoardArray2(arr){
    let j=arr.length-2;
    let currentMax = arr[j+1];
    while(j>=0){
        if(arr[j]>currentMax){
            console.log(currentMax)
            currentMax=arr[j];
        }
        j--;
    }
    console.log(currentMax)
}