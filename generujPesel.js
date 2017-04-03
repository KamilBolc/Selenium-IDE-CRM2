Selenium.prototype.doTypeRandomPesel = function(locator){

var initialDate = new Date();
var curr_year = initialDate.getFullYear();
//below string - describes lower boundary of years used to generate PESEL; in this case it's minus 100 years from present year
var curr_yearMinus100 = curr_year - 100;
//below two strings - describes upper boundary of years used to generate PESEL; in this case it's minus 19 years from present year
//in first string it's "curr_year - 18" because string generating random number will add +1 so "curr_year - 18" in fact means "curr_year - 19"
var curr_yearMinus19 = curr_year - 18;
var curr_yearMinus19_2 = curr_yearMinus19 - (curr_year - 100);

var rok = Math.floor(curr_yearMinus19_2*Math.random()+curr_yearMinus100);

var miesiac = Math.floor(12*Math.random()+1);

var dzien = Math.floor(28*Math.random()+1);

/*
var rok = document.getElementById('rok');

var miesiac = document.getElementById('miesiac');

var dzien = document.getElementById('dzien');

var plec_k = document.getElementById('plec_k');
var plec_m = document.getElementById('plec_m');
var plec_l = document.getElementById('plec_l');
var pesel_gen = document.getElementById('pesel_gen');
pesel_gen.innerHTML = "";
var data_urodzenia_gen = document.getElementById('data_urodzenia_gen');
data_urodzenia_gen.innerHTML = "";
var plec_gen = document.getElementById('plec_gen');
plec_gen.innerHTML = "";
*/

    if(rok!=''){
        if( rok<1800 || rok >2299 || rok == null){
            pesel_gen.innerHTML = "Podano nieprawidłowy rok";
            return false;
            }else{
            var MyRok = rok;
            }
    }else{
    var MyRok = Math.round(Math.random() * (2299 - 1899)) + 1899;
    }

    if(miesiac!=""){
        if( miesiac<1 || miesiac >12 || miesiac == null){
            pesel_gen.innerHTML = "Podano nieprawidłowy miesiąc";
            return false;
            }else{
            var MyMiesiac = miesiac;
            }
    }else{
    var MyMiesiac = Math.round(Math.random() * (12 - 1)) + 1;
    }

    if(dzien!=''){
        if(dzien<1 || dzien >31 || dzien == null){
            pesel_gen.innerHTML = "Podano nieprawidłowy dzień?";
            return false;
            }else{
            var MyDzien = dzien;
            }
    }else{
    var MyDzien = Math.round(Math.random() * (28 - 1)) + 1;
    }
   
    var d = new Date();
    d.setFullYear(MyRok);
    d.setMonth(MyMiesiac-1);
    d.setDate(MyDzien);
   
   
    var MyPesel = new Array();
    MyPesel[0] = d.getFullYear().toString().substring(2,3);
    MyPesel[1] = d.getFullYear().toString().substring(3,4);
   
    if(d.getFullYear().toString().substring(0,2) == "19") var dodajMiesiac = 0;
    if(d.getFullYear().toString().substring(0,2) == "18") var dodajMiesiac = 80;
    if(d.getFullYear().toString().substring(0,2) == "20") var dodajMiesiac = 20;
    if(d.getFullYear().toString().substring(0,2) == "21") var dodajMiesiac = 40;
    if(d.getFullYear().toString().substring(0,2) == "22") var dodajMiesiac = 60;
   
   
    var newMiesiac = d.getMonth();
    newMiesiac++;
    newMiesiac = parseInt(newMiesiac+dodajMiesiac);
    newMiesiac = newMiesiac.toString();
   
    if(newMiesiac.length == 1){
            MyPesel[2] = 0;
            MyPesel[3] = newMiesiac;
            }else{
            MyPesel[2] = newMiesiac.substring(0,1);
            MyPesel[3] = newMiesiac.substring(1,2);
            }
    var newDzien = d.getDate().toString();
       
    if(newDzien .length == 1){
            MyPesel[4] = 0;
            MyPesel[5] = newDzien;
            }else{
            MyPesel[4] = newDzien.substring(0,1);
            MyPesel[5] = newDzien.substring(1,2);
            }
   
    Math.round(Math.random() * (999 - 100)) + 100;
   
    MyPesel[6] = Math.round(Math.random() * (9 - 0));
    MyPesel[7] = Math.round(Math.random() * (9 - 0));
    MyPesel[8] = Math.round(Math.random() * (9 - 0));
   
    var myPlec = Math.round(Math.random() * (9 - 0)) + 0;
    if(plec_k = 1){
   
        if(myPlec==0) MyPesel[9]=myPlec;
        else MyPesel[9] = parseInt((myPlec+1)%10)
   
    }else if(plec_m = 1){
        if(myPlec==1) MyPesel[9]=myPlec;
        else MyPesel[9] = parseInt((myPlec+1)%10)
   
    }else MyPesel[9]=myPlec;
   
//    if((MyPesel[9]%2) == 0) plec_gen.innerHTML="Kobieta";
//    if((MyPesel[9]%2) == 1) plec_gen.innerHTML="Mężczyzna";

var MySuma = parseInt(MyPesel[0]*1+MyPesel[1]*3+MyPesel[2]*7+MyPesel[3]*9+MyPesel[4]*1+MyPesel[5]*3+MyPesel[6]*7+MyPesel[7]*9+MyPesel[8]*1+MyPesel[9]*3);    
var MyControl = 10 - MySuma%10;
var MyControlNr = (MyControl == 10)? 0 : MyControl;
MyPesel[10] = MyControlNr;
   
//    pesel_gen.innerHTML = MyPesel.join('');
    pesel_gen = MyPesel.join('');
//    data_urodzenia_gen.innerHTML = d.getFullYear() + '-' + parseInt(d.getMonth()+1) + '-' + MyPesel[4] + MyPesel[5];

//var "pesel_gen" contains generated PESEL
this.doType(locator, pesel_gen);

}