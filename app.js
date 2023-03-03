//Fonksiyon ile yılları listele
function yillar()
{
var yil=new Date().getFullYear();

for(var i=yil; i>=1970;i-- ){
     var opsiyon=document.createElement("option");
          opsiyon.text=i;
          opsiyon.value=i;
          document.getElementById("aracYili").appendChild(opsiyon);

          console.log(i)                    }
}


function vergiHesapla(){
          var aracTipi,motorGucu,aracYili;
          var odenecekVergi;
          var i;
//Arac tipi seçimi için döngü

          for(var i=0;i<document.getElementById('cars').length;i++){
                    if (document.getElementById('cars').options[i].selected){
                    aracTipi=document.getElementById('cars').options[i].value;

                    }
          }

 //Motorgucu seçimi

          for(var i=0;i<document.getElementsByName('secenek').length;i++){
                    if(document.getElementsByName('secenek')[i].checked){
                              motorGucu=document.getElementsByName('secenek')[i].value;
                    }
          }
 //Araç yılı seçimi

          for(var i=0; i<document.getElementById('aracYili').length;i++){
                    if(document.getElementById('aracYili').options[i].selected){
                              aracYili=document.getElementById('aracYili').options[i].value;
                    }
          }





          //-----------Koşullar------

 // Araç tipine göre koşullar
          if (aracTipi=='oto'){
                    aracTipi=1.4;}
          else if(aracTipi=='moto'){
                    aracTipi=1.2;}
          else {aracTipi=1.6;}

          


// Araç motor Gücüne göre koşullar
          if (motorGucu=='1000'){
                    motorGucu=1.2;
          }
          else if(motorGucu=='1300'){
                    motorGucu=1.4;
          }
          else if(motorGucu=='1600'){
                    motorGucu=1.6;
          }
          else{motorGucu=1.8;}


// Araç yaşına göre koşullar


          if (aracYili<=2000){
                    aracYili=1.2;
          }
          else if (aracYili<=2010){
                    aracYili=1.4;
          }
          else {aracYili=1.6;}


//Ödenecek vergiyi Hesaplama

          odenecekVergi=Math.floor((aracTipi*motorGucu*aracYili*100)-100)

          yazi=('Ödenecek Vergi: %' +odenecekVergi)
          document.getElementById('son').innerHTML=yazi;

          }








