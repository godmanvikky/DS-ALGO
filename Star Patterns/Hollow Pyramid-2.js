let str;
let N=5;
for(let i=0;i<N;i++){
    str=""
    for(let k=0;k<N-i;k++){
        str+=" "
    }
    for(let j=0;j<2*i+1;j++){
        if(j==0||i==N-1||j-i==i)
        str+="*"
        else
            str+=" "
    }
    console.log(str)
}
