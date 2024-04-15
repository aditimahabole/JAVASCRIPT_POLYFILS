// Polyfill for Reduce
// reduce takes a callback and initial value
// arr.reduce(()=>{}, starting_value)
// the callback inside reduce has accumulator , current value , index , array
// Imp Point : if user fails to give starting value then 
// reduce fn takes the 0th index values of array as initial value

Array.prototype.myReduce = function (callback_fn,starting_value){
    var result = starting_value;
    // if starting value is not provided then
    // assign 0th index value of array 
    for(let i=0;i<this.length;i++){
        result = result ?
        callback_fn(result,this[i],i,this) :
        this[i];
    }
    return result;
}

const nums = [1,2,3,4,5,6,7,8,9,10]
const sum = nums.myReduce((acc,curr,i,arr)=>{
    return acc+curr;
},0);
console.log(sum)
// 55
