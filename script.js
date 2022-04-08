// 1.

// let a = 5;
// let b = 2;

// if(a > b) {
//    console.log(a + ' yra daugiau už ' + b)
// } else if (a < b) {
//    console.log(a + ' yra mažiau už  ' + b)
// } else {
//    console.log(a+ ' = ' + b)
// }

// 2.

// for (i=1; i<=10; i++) {
//       console.log(i)
//    }

// 3. 

// for (i=0; i<=10; i= i+2) {
//       console.log(i)
//    }

// 4.

// for (i=0; i<10; i++) {
//    console.log(Math.floor(Math.random()*10) + 1)
// }

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)


// let i = 0

// function randomNum() {
//     while (i < 10) {
//         i = Math.floor(Math.random() * 10)
//         console.log(i)
//         if (i == 5){
//             console.log(i);
//             break;
//         }
//     }
// }

// randomNum();

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

// var lowest = 20;
// var highest = 30;
// var arr = [];

// for (var i = lowest; i <= highest; i++) {
//     arr.push(i);
// }
// console.log(arr);

// function largest(arr) {
//    let i;
//    let max = arr[0];
//    for (i = 1; i < arr.length; i++) {
//        if (arr[i] > max)
//            max = arr[i];
//    }
//  return max;
// }

// console.log("Largest number in array " + largest(arr));



// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)


// ****UNFINISHED ** /

// function makeid(length) {
//    var result           = '';
//    var count =0;
//    var characters       = 'ABCD';
//    var charactersLength = characters.length;
//    for ( var i = 0; i < length; i++ ) {
//      result += characters.charAt(Math.floor(Math.random() * charactersLength));
//      if (makeid() == characters) {
//         count += 1;
//      }
//   }
//   return result;
 
// }

// console.log(makeid(5));






// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)


// ****UNFINISHED ** /


// var a = 10;
// var b = '10';

// function lygineSuma(a,b){
//    if(typeOf a == 'number'){
//       return a + ' is a number'
//    } else if(typeOf b == 'number') {
//     return "Both numbers sum" + ' = ' a + b;
//    }
    

// }






// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)


// function pirminisSkaicius(n) {
//    for (let i = 2; i * i <= n; i++)
//        if (n % i === 0) {
//          return 'Skaičius ' + n + ' nėra pirminis'
//        } else {
//           return 'Skaičius ' + n + ' yra pirminis'
//        }     
//    return n > 1;
// }

// console.log(pirminisSkaicius(11))
// console.log(pirminisSkaicius(12))


// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ];

// const telefonoNumeris = (arr = []) => {
//    let mob = '';
//    arr = arr.map(String);
//    mob += `(${arr[4]+arr[1]+arr[6]}) `;
//    mob += `${arr[3] + arr[9] + arr[5]}-`;
//    mob += arr[2] + arr[7] + arr[8] + arr[0];
//    return mob;
// };
// console.log(telefonoNumeris(arr));
