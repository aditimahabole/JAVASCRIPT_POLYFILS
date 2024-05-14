
// --------What is Debouncing----------

// Debouncing is a technique used to ensure that a function is not called too frequently.
// It's particularly useful when handling events that may trigger multiple times in quick
// succession, such as resizing the window or typing. Debouncing ensures that the function is 
// only executed after a certain amount of time has passed since the last time the event was triggered.
// This can help improve performance by reducing the number of times the function is called.

// CODE 
function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

// Example usage:
function handleInput() {
    console.log("Input debounced!");
}

const debouncedHandleInput = debounce(handleInput, 300); // Debounce for 300 milliseconds

// Attach debounced function to input event
document.getElementById("myInput").addEventListener("input", debouncedHandleInput);



// In this example, the debounce function takes a function func and a delay delay as arguments.
// It returns a new function that, when called, will execute func only after delay milliseconds 
// have passed since the last call. This is achieved by using setTimeout to delay the execution 
// of func, and clearTimeout to cancel any pending executions if the function is called again 
// before the delay has elapsed.
