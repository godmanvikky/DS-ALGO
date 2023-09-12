function leftShift(arr){
    let i=0;
    let lastElement=arr[i];
    while(i<arr.length){
        arr[i]=arr[i+1]
        i++;
    }
    arr[arr.length-1]=lastElement;
    return arr;
}