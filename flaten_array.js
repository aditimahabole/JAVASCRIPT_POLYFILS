const arr = [ 1,2,3,[4,[5,6,[7,8],9],10],11,12]
// Flatten the array
// Recursion 
function flat_Array(nums,flatArr){
    for(let i=0;i<nums.length;i++){
        if(Array.isArray(nums[i])){
            flat_Array(nums[i],flatArr);
        }
        else{
            flatArr.push(nums[i]);
        }
    }
    return flatArr;
}
const ans = flat_Array(arr,[]);
console.log(ans)
// OUTPUT 
// [
//    1,  2, 3, 4,  5,
//    6,  7, 8, 9, 10,
//   11, 12
// ]
