// Polyfill for map()
// Array.map((num,i,arr)=>{})
// it returns a new array always 
// --------------------------------------------
Array.prototype.myMap = function (callback){
    // here call back is multiply by 3 function
    let temp_arr = [];
    // this -> refers to parent array
    for(let i=0;i<this.length;i++){
        temp_arr.push(callback(this[i],i,this))
    }
    return temp_arr;
}
const nums = [1,2,3,4,5,6];
const multiply_by_3 = nums.myMap((num,i,nums)=>{
    return num*3;
})
console.log(multiply_by_3)
// ---------------------------------------------
// output : 
// [ 3, 6, 9, 12, 15, 18 ]
