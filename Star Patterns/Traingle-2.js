let str="";
for(let i=0;i<5;i++){
    str="";
    for(let j=0;j<5;j++){
        if(i+j==4||j==4||i==4){
            str+="*";
        }
        else{
            str+=" ";
        }
    }
    console.log(str)
}
