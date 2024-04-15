// Pollyfil for apply()
// How it looks
let car1 = {
    color:"Yellow",
    company:"BMW"
}
function purchase_car(currency,price){
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}. `)
}
// fn.call(object,[array of parameters])
purchase_car.apply(car1,["Rs" , 400000])

//------------------- apply Polyfill----------------------------
// It belongs to prototype of Function
Function.prototype.myApply = function(object = {},args_arr = []){
    if(typeof this!=="function"){
        throw new Error(this + "is not a callable function")
    }
    if(!Array.isArray(args_arr))
    {
        throw new Error("Array should be provided")
    }
    object.fn = this; 
    // this ->refers to function on which apply(method applied)
    // object.fn = this;-> This line is assigning the function 
    // (this) to a temporary property fn of the object
    object.fn(...args_arr)
}
purchase_car.myApply(car1,["$" , 600000])
// -----------------------------------------------------------
// Output : 
// I have purchased Yellow - BMW car for Rs 400000. 
// I have purchased Yellow - BMW car for $ 600000. 
