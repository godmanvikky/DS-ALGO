function waveForm(arr){
    for(let i=1;i<arr.length;i++){
        if(i%2==0&&arr[i-1]>arr[i]){
            let temp=arr[i]
            arr[i]=arr[i-1]
            arr[i-1]=temp;
        }
        else if(i%2!=0 && arr[i]>arr[i-1]){
             let temp=arr[i]
            arr[i]=arr[i-1]
            arr[i-1]=temp;
        }
        }
    return arr;
}