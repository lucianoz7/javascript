 function parimpar(n) {
    if (n%2==0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
 
console.log(parimpar(11)) 

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(7, 5))

let v = function(x) {
    return x*2
}

console.log(v(5))

/*
let res = parimpar(4)
console.log(res)
*/

/*
let res = 10

if (res%2==0) {
    console.log('Par')
} else {
    console.log('Impar')
}*/