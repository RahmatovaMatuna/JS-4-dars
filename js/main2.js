
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
document.querySelector(".matnTegi").addEventListener('paste',function (event){
    console.log("Diqqat! Diqqat! Sizga "+ event.target.value + "nomli maxfiy xujjatlar kiritilmoqta!")
})