function displayValue(event){
    result.value+=event.target.value;
}
function clearFunction(){
    result.value="";
}
function evaluateExpression(){
    var res=document.querySelector("#result").value
    var val=(eval(res));
    if (val){
        result.value=eval(res);
    }
    else{
        result.value="unknown"
    }
}