//Delete an array based on the index
function deleteElement(arr,index){
    if(arr.length>1){
        let i=0;
        let newArray = new Array(arr.length-1);
        while(i<index){
            newArray[i]=arr[i]
            i++;
        }
        while(i<arr.length-1){
            newArray[i]=arr[i+1]
            i++;
        }
        return newArray;
    }
    return 0
    
}