// // // import React, { useEffect, useState } from "react";

// // // const UserList = () => {
// // //   const [users, setUsers] = useState([]);

// // //   // useEffect to fetch data once when component mounts
// // //   useEffect(() => {
// // //     fetch("https://jsonplaceholder.typicode.com/users") // API call to get users
// // //       .then((res) => res.json()) // Convert response to JSON
// // //       .then((data) => setUsers(data)); // Save users to state
// // //   }, []); // Empty dependency array = run only once (like componentDidMount)

// // //   return (
// // //     <div>
// // //       <h2>User List:</h2>
// // //       <ul>
// // //         {users.map((user) => (
// // //           <li key={user.id}>{user.name}</li> // Render each user
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default UserList;



// // import React, { useEffect, useState } from "react";

// // const WindowResizeTracker = () => {
// //   const [width, setWidth] = useState(window.innerWidth);

// //   useEffect(() => {
// //     const handleResize = () => setWidth(window.innerWidth); // Update width on resize

// //     window.addEventListener("resize", handleResize); // Add event listener

// //     return () => {
// //       window.removeEventListener("resize", handleResize); // Cleanup on unmount
// //     };
// //   }, []); // Only run once

// //   return <p>Window Width: {width}px</p>;
// // };

// // export default WindowResizeTracker;




// import React, { useEffect, useState } from "react";

// const NameSaver = () => {
//   const [name, setName] = useState("");

//   // Load name from localStorage when component mounts
//   useEffect(() => {
//     const savedName = localStorage.getItem("name");
//     if (savedName) {
//       setName(savedName); // Set the initial name from storage
//     }
//   }, []);

//   // Save name to localStorage every time it changes
//   useEffect(() => {
//     localStorage.setItem("name", name); // Save updated name
//   }, [name]); // Only run when `name` changes

//   return (
//     <input
//       type="text"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       placeholder="Enter your name"
//     />
//   );
// };

// export default NameSaver;

import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1); // Increase seconds every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup when unmounting
  }, []); // Only once

  return <h2>Timer: {seconds}s</h2>;
};

export default Timer;
