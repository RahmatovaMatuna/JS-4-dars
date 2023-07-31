/* DOM in JS */

/*let headTag = document.head;*/
/*let bodyTeg = document.body;*/
/*let havola = document.documentURI;*/
/*let havolalar = document.forms*/
/*let rasmlar = document.images*/
/*console.log(rasmlar);*/



/* Events in JS: onclick,ondblclick,onchange,onfocus,onblur */

function meniBirMartaBos(){
    alert("Siz battonni bir marta bosdingiz!")
}
function meniIkkiMartaBos(){
    alert("Siz battonni ikki marta bosdingiz!")
}
function tanlash(event){
    alert("Siz "+  event.target.value  +  "ni tanladingiz")
}
function inputgaBosish(){
    console.log("Inputga bosildi!")
}
function inputdanChiqish(){
    console.log("Inputdan chiqildi!")
}
function yozish(event){
   console.log(event.target.value)
}
document.querySelector(".matnTegi").addEventListener('copy',function (event){
    console.log("Diqqat! Diqqat! Sizdan "+ event.target.value + "nomli maxfiy xujjatlar ko'chirilyapti")
})


/*function harakatlanish(e){
    console.log(e.clientX,e.clientY)
}*/
/*function kirish(){
   console.log("Hududga kirildi!")
}*/
/*function chiqish(){
    console.log("Hududgdan chiqildi!")
}*/


