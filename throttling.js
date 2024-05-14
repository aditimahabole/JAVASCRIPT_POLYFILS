// ------ Throttling? --------

// Throttling is a technique used to limit the rate at which a function is called.
// It ensures that the function is not called more than once within a certain time interval,
// regardless of how many times the event that triggers it occurs. Throttling is useful 
// for tasks such as handling scroll events or tracking mouse movement, where you want 
// to execute a function periodically but not too frequently.

function throttle(func, delay) {
    let lastCalledTime = 0;
    return function() {
        const context = this;
        const args = arguments;
        const now = Date.now();
        if (now - lastCalledTime >= delay) {
            func.apply(context, args);
            lastCalledTime = now;
        }
    };
}

// Example usage:
function handleScroll() {
    console.log("Scroll throttled!");
}

const throttledHandleScroll = throttle(handleScroll, 300); // Throttle for 300 milliseconds

// Attach throttled function to scroll event
window.addEventListener("scroll", throttledHandleScroll);


// In this example, the throttle function takes a function func and a delay delay as arguments.
// It returns a new function that, when called, will execute func only if the time elapsed 
// since the last call is greater than or equal to delay milliseconds. Otherwise, the function 
// is not executed, and subsequent calls are ignored until the delay has elapsed.
