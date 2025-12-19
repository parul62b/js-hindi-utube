// ======================================================
// JavaScript Execution Context & Call Stack
// Quick Revision Notes (Chai aur Code)
// ======================================================

// 1) JavaScript Execution Context
// --------------------------------
// When JavaScript runs a program, it creates an Execution Context.
// Execution Context = Environment where JS code is executed.

// Types of Execution Context:
// 1. Global Execution Context (GEC)
// 2. Function Execution Context
// 3. Eval Execution Context (rarely used)


// 2) Global Execution Context (GEC)
// --------------------------------
// - Created first when the program starts
// - Only one Global Execution Context exists
// - `this` keyword is defined here
//   Browser  -> this = window
//   Node.js  -> this = { }


// 3) Phases of Execution Context
// ------------------------------
// Every execution context works in two phases:

// Phase 1: Memory Creation Phase
// - Variables are allocated memory as `undefined`
// - Functions are stored completely in memory
// - No code is executed in this phase

// Phase 2: Execution Phase
// - Values are assigned to variables
// - Functions are executed line by line


// 4) Example
// ----------
// let a = 10;
// let b = 20;

// function add(x, y) {
//   return x + y;
// }

// let result = add(a, b);

// Memory Creation Phase:
// a       -> undefined
// b       -> undefined
// add     -> function definition
// result  -> undefined

// Execution Phase:
// a = 10
// b = 20
// add(a, b) executes
// result = 30


// 5) Function Execution Context
// -----------------------------
// - Created whenever a function is called
// - Has its own memory phase and execution phase
// - Removed after function execution is complete


// 6) Call Stack
// -------------
// - Call Stack manages execution order of functions
// - Works on LIFO (Last In, First Out) principle

// Steps:
// 1. Global Execution Context is pushed first
// 2. Function calls are pushed on top
// 3. Function completes -> popped out
// 4. Finally, Global Execution Context is removed


// 7) Call Stack Example
// --------------------
// function one() {
//   two();
// }

// function two() {
//   three();
// }

// function three() {
//   console.log("Hello");
// }

// one();

// Call Stack Flow:
// Global
// one()
// two()
// three()

// After execution:
// three() -> removed
// two()   -> removed
// one()   -> removed
// Global  -> removed


// 8) Importance of Call Stack
// ----------------------------
// - Manages function execution
// - Helps in debugging
// - Prevents infinite recursion


// 9) Stack Overflow
// ------------------
// Occurs when too many function calls are added to the call stack

// Example:
// function test() {
//   test();
// }
// test(); // Stack Overflow error


// 10) Important Keywords for Revision
// -----------------------------------
// Execution Context
// Global Execution Context
// Function Execution Context
// Memory Creation Phase
// Execution Phase
// Call Stack
// LIFO
// Stack Overflow


// One-Line Summary:
// JavaScript executes code using execution contexts created in two phases,
// and the call stack controls function execution using LIFO.
// ======================================================
