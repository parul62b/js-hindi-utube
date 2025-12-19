// for loop syntax: initialization; condition; increment (runs until condition becomes false)[file:1]
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// 'let i' is block-scoped, so 'i' is only accessible inside the curly braces of the for loop.[file:1]
// Flow: initialize 'i' once → check condition → run body → increment → repeat until condition is false.[file:1]

// Using a variable inside the loop body and printing it.[file:1]
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}
// 'element' is also block-scoped; it cannot be accessed outside the loop block.[file:1]

// Changing loop variable name using editor multi-cursor; 'i' or 'index' are just variable names.[file:1]
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// Common pattern: 'i' used as the loop counter variable in many codebases.[file:1]

// Nested for loops: outer loop runs fully for one value, inner loop runs completely for each outer iteration.[file:1]
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value:${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value: ${j}`);
    }
}
// Total iterations = (outer loop count) × (inner loop count); inner loop resets for every outer loop value.[file:1]

// Printing multiplication tables using nested loops.[file:1]
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
// This prints the full table for 0–10; changing start value (e.g., i = 1) avoids the 0 table.[file:1]

// Using for loop over an array with index-based access.[file:1]
const heroes = ["flash", "batman", "superman"];
for (let index = 0; index < heroes.length; index++) {
    const element = heroes[index];
    console.log(element);
}
// 'heroes.length' gives array size; valid indices are 0 to length - 1.[file:1]
// Using 'index <= heroes.length' causes access beyond last element and prints 'undefined'.[file:1]

// Infinite loop example when increment is missing or not changing the condition variable.[file:1]
for (let index = 0; index < heroes.length; ) {
    console.log(heroes[index]);
}
// Without 'index++' (or any increment), condition never changes and loop never ends logically.[file:1]

// Printing numbers from 1 to 20 using a for loop.[file:1]
for (let i = 1; i <= 20; i++) {
    console.log(`Value of i is ${i}`);
}
// Start from 1 instead of 0 by setting initialization to 'let i = 1;'.[file:1]

// Using 'break' to exit the loop early when a condition is met.[file:1]
for (let i = 1; i <= 20; i++) {
    console.log(`⁠Value of i is ${i}`);
    if (i === 5) {
        console.log("Detected 5");
        break;
    }
}
// 'break' stops the loop completely and jumps control outside the loop block once the condition is true.[file:1]

// Using 'continue' to skip the current iteration but keep the loop running.[file:1]
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);
}
// 'continue' skips logging for i = 5 but the loop still runs for 6–20.[file:1]
// Difference: 'break' ends the loop; 'continue' ignores only that iteration and moves to the next one.[file:1]

// Use case explanation: break and continue help when data is large (e.g., thousands of items) and you only need part of it.[file:1]
for (let i = 1; i <= 1000; i++) {
    if (i > 10) {
        break; // Example: only want to process first 10 items from a large dataset.[file:1]
    }
    console.log(i);
}
// This pattern is similar to paginating data or stopping after some condition in real applications.