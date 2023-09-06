//Move all the negative number to one side
function moveAllNegativeToOneSide(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        while(arr[i]>=0){
            i++;
        }
        while(arr[j]<0){
            j--;
        }
        if(i<j){
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    return arr;
}