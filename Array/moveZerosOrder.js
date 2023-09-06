function moveZerosInOrderEnd(arr){
    let counter=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            arr[counter]=arr[i]
            counter++
        }
    }
    while(counter<arr.length-1){
        arr[counter]=0;
        counter++;
    }
    return arr;
}