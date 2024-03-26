/* Home Task JS-2 25.03.2024*/

// Asagidakilari arasdirin: 
// concat
// repeat
// match
// test

// Ev taski: 
// 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.
// 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.
// 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.
// 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.
// 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.
// 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.
// HELLO -> true
// HELLo -> false
// hello -> false
// heLLo -> false




/*    1   */

/*
// 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.
 // İSTİFADƏCİNİN ADINI YAZMAQ  _Mirqafar
let username = prompt("İstifadəçinin adını yazın:");
console.log("istifadəçi adı: " + username);
let characterCount = username.length;
console.log("Daxil edilən istifadəçi adındakı simvolların sayı: " + characterCount);

*/




/*

  2 task
// 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.
let birincisoz = prompt("Birinci sözü daxil edin:");
let simvol = prompt("Simvolu daxil edin:");
let simvolVar = birincisoz.includes(simvol)
console.log(simvolVar)

*/


/*
// 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.

let birincisoz = prompt("Birinci sözü daxil edin:");
let simvol = prompt("Simvolu daxil edin:");
let baslayir =birincisoz.startsWith(simvol)
console.log(baslayir)
*/


/*
// 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.

let birincisoz = prompt("Birinci sözü daxil edin:");
let simvol = prompt("Simvolu daxil edin:");
let bitirmi =birincisoz.endsWith(simvol)
console.log("İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ? " + bitirmi);
*/


/*

// 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.

let birincisoz = prompt("Birinci sözü daxil edin:");
let simvol = prompt("Simvolu daxil edin:");
let index =birincisoz.indexOf(simvol)
console.log("Simvolun birinci sözdəki indeksi :" + index );
*/




/*   

// 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.
// HELLO -> true
// HELLo -> false
// hello -> false
// heLLo -> false

let soz = prompt("Sözü daxil edin:  ")
let hamısıböyükherf = soz === soz.toUpperCase();
console.log(hamısıböyükherf)

*/

