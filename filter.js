// Polyfill for filter
// It returns those values that satify the conditions

Array.prototype.myFilter = function(callback_fn){
    let temp = [];
    for(let i=0;i<this.length;i++){
        // if it satisfies then only push
        if(callback_fn(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const nums = [0,1,2,3,4,5,6]

const is_even = nums.myFilter(function(num,i,nums){
    return num%2 == 0 ? true:false;
})
console.log(is_even)

// Output
// [ 0, 2, 4, 6 ]
