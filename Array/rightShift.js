function rightShift(arr){
    let j=arr.length-1;
    let firstElement=arr[j];
    while(j>0){
        arr[j]=arr[j-1];
        j--;
    }
    arr[0]=firstElement;
    return arr;
}
rightShift([7,8,9,10,23,33,32,23])