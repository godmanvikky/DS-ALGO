function leaderBoardArray(arr){
    for(let i=0;i<arr.length;i++){
        let flag=true;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                flag=false;
                break;
            }
        }
        if(flag)console.log(arr[i])
    }
}
leaderBoardArray([1,2,3,4,5,2])