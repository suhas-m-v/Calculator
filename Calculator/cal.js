const dis=document.getElementById("display")

function todis(inp){
    dis.value+=inp;
}

function clr(){
    dis.value="";
}

function cal(){
    try{
        dis.value=eval(dis.value);
    }
    catch(error){
        dis.value="Error";
    }
    
}