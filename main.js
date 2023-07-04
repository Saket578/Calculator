asasaas = "1908088080";
asasaas = asasaas.replace("0", "9");
console.log(asasaas);

window.addEventListener("mousemove",function(e){
    if(e.target instanceof HTMLButtonElement){
    x = e.target.id;
    if(x == "Equal"){
        document.getElementById("Equal").style.backgroundColor = "green";
    }
    document.getElementById(x).style.backgroundColor = "red";
}
x = null;
});

window.addEventListener("mouseout", function(e){
    if(e.target instanceof HTMLButtonElement){
        x = e.target.id;
    if(x == "Equal"){
        document.getElementById(x).style.backgroundColor = "green";
    }else{
        document.getElementById(x).style.backgroundColor = "rgb(255, 221, 0)";
    }
}
x = null;
});


var first_integar = "";
var second_integar = "";
var operation = ""
var equalS = "";
var decimal = 0;
var y = document.getElementById("User_Val");

function One(){
    y.innerHTML=document.getElementById("User_Val").textContent + "1";
}

function Two(){
    y.innerHTML=document.getElementById("User_Val").textContent + "2";
}

function Three(){
    y.innerHTML=document.getElementById("User_Val").textContent + "3";
}

function Four(){
    y.innerHTML=document.getElementById("User_Val").textContent + "4";
}

function Five(){
    y.innerHTML=document.getElementById("User_Val").textContent + "5";
}

function Six(){
    y.innerHTML=document.getElementById("User_Val").textContent + "6";
}

function Seven(){
    y.innerHTML=document.getElementById("User_Val").textContent + "7";
}

function Eight(){
    y.innerHTML=document.getElementById("User_Val").textContent + "8";
}

function Nine(){
    y.innerHTML=document.getElementById("User_Val").textContent + "9";
}

function Zero(){
    y.innerHTML=document.getElementById("User_Val").textContent + "0";
}

function sqRoot(){
    if(y.textContent == ""){}else{
    y.innerHTML=Math.pow(y.textContent,1/2);
    }
}

function applDecimal(){
    if(!y.innerHTML == ""){
        if(y.textContent.includes(".")){
            alert("Can't accept decimals in presence of another decimal")
            console.error("Can't accept decimals in presence of another decimal");
        }else{
            console.log("hello");
            y.innerHTML=y.textContent + ".";
        }
}
}

function erase(){
    a=y.textContent.length-1;
    console.log(a);
    pll = y.textContent;
    console.log(pll);
    var_strange_3 = pll.charAt(a);
    var_strange_4 = y.textContent.replace(Number(var_strange_3), "");
    console.log(var_strange_4);
    y.innerHTML = var_strange_4; 
}

function Addition(){
    operation = "add";
    op();
}

function Substraction(){
    operation = "sub";
    op();
}

function Multiplication(){
    operation = "into";
    op();
}

function Division(){
    operation = "div";
    op();
}

function power(){
    operation = "pow";
    op();
}

function op(){
    first_integar = y.textContent;
    y.innerHTML="";
    y.style.backgroundColor="red";
    document.getElementById("output-blank").style.backgroundColor="red";
}

function Equal(){
    deop();
}

function deop(){
    second_integar = y.textContent;
    
    if(operation == "add"){
        equalS = Number(first_integar) + Number(second_integar);
    }else if(operation == "sub"){
        equalS = first_integar - second_integar;
    }else if(operation == "into"){
        equalS = first_integar * second_integar;
    }else if(operation == "div"){
        equalS = first_integar / second_integar;
    }else if(operation == "pow"){
        equalS = Math.pow(first_integar,second_integar);
    }

    y.style.backgroundColor="black";
    document.getElementById("output-blank").style.backgroundColor="black";
    y.innerHTML=equalS;
}