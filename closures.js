
const add = (a,b)=>{
    console.log("hello5")
    return a+b;
}
function memoize(cb){
    let map = new Map();
    console.log("hello1")
    function temp(...para){
        console.log("hello2")
        const key = para.join("");
        console.log(key)
        if(map.has(key)){
            console.log("hello3")
            console.log("Key is present")
            return map.get(key)
        }
        console.log("hello4")
        const result = cb(...para);
        console.log("Key is not present")
        map.set(key,result);
        return result;
    }
    console.log("hello6")
    return temp;
}

const memo = memoize(add)
console.log(memo(1,2))
console.log("--------------")
console.log(memo(1,2))


console.log("--------------")
console.log(memo(1,2))
console.log("--------------")
console.log(memo(4,2))



// OUTPUT
node /tmp/kcH1WvdKJn.js
hello1
hello6
hello2
12
hello4
hello5
Key is not present
3
--------------
hello2
12
hello3
Key is present
3
--------------
hello2
12
hello3
Key is present
3
--------------
hello2
42
hello4
hello5
Key is not present
6

// -------------------------------------------

// REASON

The behavior you're referring to, where a function is called once to create another function that retains access to the scope in which it was created, 
is a feature of JavaScript known as "closures."

In JavaScript, when you define a function within another function,
the inner function maintains access to the variables and parameters of the outer function,
even after the outer function has finished executing. This capability is due to the concept of closures.

In your code example:

```javascript
function memoize(cb) {
    // Inner function `temp` is defined within the scope of `memoize`.
    function temp(...para) {
        // `temp` retains access to variables and parameters of `memoize`.
        // It also retains access to `cb`, which is the original `add` function passed to `memoize`.
        // This is possible because of closures.
    }
    // `memoize` returns `temp`, so `temp` retains access to the scope of `memoize`.
    return temp;
}
```

So, when you call `memoize(add)`, the `memoize` function is executed, creating the `temp` function.
Even after `memoize` finishes executing and returns `temp`,
`temp` still retains access to the `map` variable and the `add` function (passed as `cb`).
This is possible because `temp` forms a closure over the scope of `memoize`.

Therefore, when you subsequently call `memo(1,2)`, `temp` is executed, 
and it can still access and modify the `map` variable, even though `memoize` has already finished executing.
  This behavior is fundamental to JavaScript and allows for powerful patterns like memoization, currying, and more.

