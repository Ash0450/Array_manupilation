let a = [1,2,3,4,4,5,5]
let b = [...new Set(a)]
console.log (b)


let c = [1,2,3,3,3,6,6,6]
let d = [...new Set (c)]
console.log(d)
let e = c.reverse();
console.log(e)


let jk = [1,4,8,9]
let h = Math.max(...jk)
let o = Math.min(...jk)
console.log(o)


let we=[1,2,0,9]
let ko = we.includes(2)
console.log(ko)



let asd = [1,2,3,4,5,8]
let g = asd.reduce((acc,num)=> acc+num,0)
console.log(g)


const wr= [1,2,[3,4,[2,4]]]
const flatten = wr => wr.flat(Infinity)
console.log(flatten(wr))


let li = [1,2,0,0,3,0,6]
let gh = li.filter(num => num !== 0).concat(li.filter(num => num === 0))
console.log (gh)


let bee = [1,2,3,4,5]
const seconf= bee => {
    const uni = [...new Set(bee)]
    uni.sort((a,b) => b-a);
    return uni[1];
}
console.log(seconf(bee))
    
    
let y= [1,2,4]
    let z = [3,5,6]
    let jo = y.concat(z)
    let sd = jo.sort((a,b) => b-a)
    console.log (sd)