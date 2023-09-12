function moveZeroToOneSide(a){
    let i=0;
    let j=a.length-1;
    while(i<j){
        if(a[i]!=0){
            i++;
        }
        else if(a[j]==0){
            j--
        }
        else if(a[i]==0 && a[j]!=0){
            let temp =a[i];
            a[i]=a[j];
            a[j]=temp;
            i++;
            j--;
        }
    }
    return a;
}
moveZeroToOneSide([0,0,4,0,12,43,0,0,1])