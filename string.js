//Reverse String
let a ='hello'
let reversed = a.split('').reverse().join('')
console.log (reversed)

//Palindrome Check
const pala = 'racecar'
const palaCheck= pala === pala.split('').reverse().join('')
console.log (palaCheck)

//Vowel Count
let jh = 'hello'
let hj = jh =>{
    let vowel = ['a','e','i','o','u']
    return [...jh].filter(char=> vowel.includes(char.toLowerCase())).length
}
console.log(hj(jh))

//Capital the 1st character of each word
let ghr = 'hello world'
let capital = ghr =>
    ghr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

console.log (capital(ghr))

const str = "hello world";
