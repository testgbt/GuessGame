let skor=10;
let rastgeleSayi=Math.floor(Math.random()*20+1);
let enYuksekSkor=0;
let mesaj=document.querySelector(".mesaj");
document.querySelector(".tekrar").onclick = function(){
skor=10;
rastgeleSayi=Math.floor(Math.random()*20+1);
document.querySelector("body").style.background="black";
document.querySelector(".sayi").innerHTML="?";
document.querySelector(".skor").innerHTML= skor;
mesaj.textContent="Tahmine başlanıyooor"
}

document.querySelector(".kontrol").onclick=function(){
let tahmin = document.querySelector(".tahmin").value;

if(tahmin==rastgeleSayi){
    mesaj.innerHTML="Tebrikler sonunda bildinnnn ";
    document.querySelector("body").style.background="green";
    document.querySelector(".sayi").textContent=rastgeleSayi;

   if(skor>enYuksekSkor)
   document.querySelector(".en-skor").textContent=skor;

} else{
    if(skor>1) {
        skor--;
         tahmin<rastgeleSayi ? (mesaj.textContent="Hadi biraz Arttır") : (mesaj.textContent="Çok oldu biraz Azalt");
         document.querySelector(".skor").innerHTML=skor;
}
else{
    mesaj.textContent="Tüh kaybettin ";
    document.querySelector(".skor");
}
   

}




}
