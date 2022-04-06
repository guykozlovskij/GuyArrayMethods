const numArray = [1,2,3,4,5,6]


function GuyMap(arr: Array<any>, func: Function){
    const newArray = []
    for(let i = 0; i < arr.length; i++){
        newArray[i] = func(arr[i])
    }
    return newArray
}
// console.log(GuyMap(numArray, (value: any)=>value *5 ))


function GuyMapIterator(arr: Array<any>, func: Function){
    const newArray = []
    for(const index in arr){
        console.log(index)
        newArray.push(func(arr[index]))
    }
    return newArray
}
// console.log(GuyMapIterator(numArray, (value: any)=> value*2))
//'of' - value
//'in' - index


const composableFunc = (str: string) =>
    [str]
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(s => s + 1)

const result = composableFunc('  65 ')
console.log(result)