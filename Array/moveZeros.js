//Two pointer techinique for moving zeros to the end.
//Order not persisted here
function moveZerosToEnd(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        while(arr[i]!=0){
            i++
        }
        while(arr[j]==0){
            j--;
        }
        if(i<j){
            let temp =arr[i];
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
    return arr;
}
moveZerosToEnd([9,4,0,0,1,0,2,5,0])