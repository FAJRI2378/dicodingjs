const umur= 17;
const nama="Feby";
console.log(`Hai, nama aku ${nama}, umur aku ${umur} tahun.`);

alert(`Hai, nama aku ${nama}, umur aku ${umur} tahun.`);

let name= "arman";

function tampil (){
    console.log(name);
}
tampil();
console.log(name);


function tampilNama (nama){
    console.log(`Halo, nama saya ${nama}`);
}

const year =new Date().getFullYear();
const Text= `Tahun sekarang adalah ${year}`;
console.log(Text);


let temparture = null;
const  tempartureInCelsius = (temparture) => {
const result = 16/2 * (temparture - 32);
return result;
}

temparture = tempartureInCelsius(68);
console.log(`Suhu dalam celsius adalah ${temparture}°C`);

let temparture1 = null;
const tempartureInCelsius1 = (temparture1) => (temparture1 - 32) * 5/9;

temparture1 = tempartureInCelsius1(68);
console.log(`Suhu dalam celsius adalah ${temparture1}°C`);

function hello(name = "Fajri", origin = "Jakarta"){
    console.log(`Hallo! Nama saya ${name}, saya berasal dari ${origin}.`);
}

hello();
