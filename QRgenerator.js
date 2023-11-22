var text=document.querySelector("#textInput")
var QRImg = document.querySelector("#QRImg")
async function generate(){

    var apiURL = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
    var imgSource=await fetch(apiURL);
    console.group(apiURL)
    var QRImg = document.querySelector("#QRImg")
    QRImg.src=apiURL
    QRImg.classList.toggle("show-qr")
    QRImg.style.visibility="visible";
    var btn1=document.querySelector("#btn")
    btn1.style.visibility="visible";
}
function clearQR(){
    var btn1=document.querySelector("#btn")
    var text=document.querySelector("#textInput")
    var QRImg = document.querySelector("#QRImg")
    var link= ""
    QRImg.src=link;
    text.value=link;
    btn1.style.visibility="hidden";
    QRImg.style.visibility="hidden";
}