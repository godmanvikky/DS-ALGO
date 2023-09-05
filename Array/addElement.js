//Inserting a new Element to a fixed array
function insertElement(arr,N,index){
    let newArray= new Array(arr.length+1)
    let i=0;
    while(i<index){
        newArray[i]=arr[i]
        i++;
    }
    newArray[i]=N;
    while(i<arr.length){
        newArray[i+1]=arr[i];
        i++
    }
    return newArray;
}
insertElement([1,2,4,5],3,2)