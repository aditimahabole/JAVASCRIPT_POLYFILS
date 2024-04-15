// Pollyfil for Call()
// How it looks
let car1 = {
    color:"Red",
    company:"Ferrari"
}

function purchase_car(currency,price){
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}. `)
}
// fn.call(object,paramter1.parameter2,...)
purchase_car.call(car1,"Rs" , 400000)

// It belongs to prototype of Function
Function.prototype.myCall = function(object = {},...args){
    if(typeof this!=="function"){
        throw new Error(this + "is not a callable function")
    }
    object.fn = this; // this -> function on which call(method applied)
    // object.fn = this;: This line is assigning the function (this) to a temporary property fn of the object
    object.fn(...args)
}

purchase_car.myCall(car1,"$" , 500000)
