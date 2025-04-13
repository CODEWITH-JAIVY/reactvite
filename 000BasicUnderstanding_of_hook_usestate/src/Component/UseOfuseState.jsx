// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// 🔍 What’s Happening Here:
// When you click a button, it updates the color.

// A setTimeout waits for 2 seconds before showing the alert.

// But if you change the color again before 2 seconds, the cleanup cancels the previous timer.
//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// 📘 React useEffect Hook – Developer Notes
// 🔹 What is useEffect?
// useEffect is a React Hook that lets you perform side effects in function components (like fetching data, setting up subscriptions, timers, DOM manipulation, etc.).

// 🔹 Basic Syntax
// js
// Copy
// Edit
// useEffect(() => {
//   // side-effect logic here
// }, [dependencies]);


// 🧠 When Does It Run?
// Dependency Array	When useEffect runs
// []	Only on component mount (once)
// [state, props]	On component mount + whenever those values change
// No array	On every render (⚠️ not recommended unless needed)
// 🔹 Example: On Component Mount
// js
// Copy
// Edit
// useEffect(() => {
//   console.log("Component mounted");
// }, []);
// 🔹 Example: On State Change
// js
// Copy
// Edit
// useEffect(() => {
//   console.log("Color changed to", color);
// }, [color]);
// 🔹 Cleanup Function
// Used to prevent memory leaks (like clearing timers, removing event listeners, unsubscribing, etc.).

// js
// Copy
// Edit
// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("Running every second");
//   }, 1000);

//   return () => {
//     clearInterval(interval);
//     console.log("Cleanup: interval cleared");
//   };
// }, []);
// 🔹 Real-World Use Cases
// ✅ API Calls
// ✅ Event Listeners
// ✅ setTimeout / setInterval
// ✅ Subscriptions (Firebase, Sockets)
// ✅ DOM Manipulation
// ✅ Cleanups on unmount 
 // ❤️❤️❤️❤️MOST READ TO UNDERSTAND THE USEEFFECT AND USESTRATE 
//🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️🖊️

import React, { useState, useEffect } from "react";

function ColorChanger() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      alert(`Color changed to ${color}`);
    }, 2000); // wait 2 seconds

    // ✅ Cleanup: clear timeout if color changes again before 2s
    return () => {
      clearTimeout(timer);
      console.log(`Cleanup: cleared previous timer for color = ${color}`);
    };
  }, [color]);

  return (
    <div>
      <h1 style={{ color }}>My favorite color: {color}</h1>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
    </div>
  );
}

export default ColorChanger;
