let str;
let N=5;
for(let i=0;i<N;i++){
    str=""
    for(let k=0;k<i;k++){
        str+=" "
    }
    for(let j=0;j<(2*(N-i)-1);j++){
        if(i==0||j==0||j==(2*(N-i)-2))
        str+="*"
        else
            str+=" "
    }
    console.log(str)
}