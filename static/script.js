function verifSelect(val){
    if(val == "cartao")
        carregar();
}

window.onload = ()=>{
    var msg = document.getElementById("msg").innerText;
    var barra = document.getElementById("barra");
}

function cartaoTrigger(){
    setTimeout(  ()=>{
        msg.innerText = "Aguarde, recebendo dados do pagamento.";
    }, 0);
    setTimeout(  ()=>{
        msg.innerText = "Validando dados no pedido..";
    }, 4000);
    setTimeout(  ()=>{
        msg.innerText = "Registro de pagamento concluido !";
    }, 10000);
    setTimeout( ()=> {
        msg.innerText = "";},11000);    
}

function carregar(){
    var i = 0;
    cartaoTrigger();
    barra.style.display = "block";
    barra.classList.remove("bg-success");
    barra.classList.add("d-flex");
    barra.classList.add("justify-content-center");
    var contador = setInterval(()=>{
        if(i!=101){
        barra.style.width = i+"%";  
        barra.innerText = i+"%";
        i++;  }
        else if(i==101){
        barra.innerText = "";
        barra.classList.add("bg-success");
        barra.classList.remove("d-flex");
        barra.classList.remove("justify-content-center");
        }
    },100);
    setTimeout(()=>{
        clearInterval(contador);
        barra.style.display = "none";
    },11000);
}


/*function displayEventBlock(id)
{
   document.getElementById(id).style.display = "block";
   document.getElementById(id).style.fontSize = "15px";
   document.getElementById(id).style.alignContent = "Bottom";
}
function displayEventNone(id)
{
   document.getElementById(id).style.display = "none";
}
*/