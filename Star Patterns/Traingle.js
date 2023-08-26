let str;
for(let i=0;i<5;i++){
    str=""
    for(let k=0;k<5-i;k++){
        str+=" "
    }
    for(let j=0;j<2*i+1;j++){
        str+="*"
    }
    console.log(str)
}
