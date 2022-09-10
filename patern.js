//1. Square Star Pattern in Javascript

/*let n = 5;
let star = "";

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        star += "*";
    }
    star += "\n";
}
console.log(star);
*/

//2. Hollow Square Pattern

/*let n = 5;
let star = "";

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if( (i===0) || i === (n - 1)){
            star += "*";
        }
        else{
            if((j === 0)||j ===(n - 1)){
                star += "#";
            }
            else{
                star += " "
            }
        }
        
    } 
    star += "\n";
}
console.log(star);
*/

//3. Right Triangle Pattern in Javascript

/*let n = 5;
let star = "";

for(let i = 1; i <= n; i++){
    for(let j = 0; j < n - i; j++){
        star += " ";
    }
    for(let k = 0; k < i; k++){
        star += "*";
    }
    star += "\n";
}

console.log(star);
*/
//4. Left Triangle Pattern in Javascript
/*let n = 5;
let star = "";

for(let i = 1; i <= n; i++){
    // for(let j = 0; j < n - 1; j++){
    //     star += " ";
    // }
    for(let k = 0; k < i; k++){
        star += "*";
    }
    star += "\n";
}

console.log(star);
*/

//5. Downward Triangle Star Pattern

// let n = 5;
// let star = "";

// for(let i = 0; i <= n; i++){
//     for(let j = 0; j < n - i; j++){
//         star += "*";
//     }
//     star += "\n";
// }

// console.log(star);

// 6. Hollow Triangle Star Pattern

/*let n = 6;
let star = "";

for(let i = 1; i <= 6; i++){
    for(let j = 0; j < i; j++){
        if(i===n){
            star += "*";
        }
        else{
            if(j==0 || j == i - 1){
                star += "*"; 
            }             
            else{
                star += "s";
            }
        }
    }
    star += "\n";
}
console.log(star);
*/

//7. Javascript Pyramid Pattern

/*let n = 5;
let star = "";

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
        star += " ";
    }
    for(let k = 0; k < (2 * i) - 1; k++){
        star += "*";
    }
    star += "\n";
}

console.log(star);
*/

