let exp="";
function show(val){
    if(val!=='=')
    {
        exp= exp+val;
        document.getElementById("screen").value=exp;
    }
    else if(val=='=')
    {   
        let result=eval(exp);
        document.getElementById("screen").value="";
        document.getElementById("screen").value=result;
    }
}

function clr(){
document.getElementById("screen").value="";
exp="";
}