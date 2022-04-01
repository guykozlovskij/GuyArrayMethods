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
console.log(GuyMapIterator(numArray, (value: any)=> value*2))
//'of' - value
//'in' - index

//reduce - accumulator will be array returned
//Hello, I just got a new Sim and was advised to get intouch with support in order to add my existing phone number to the new sim, hope you can help


