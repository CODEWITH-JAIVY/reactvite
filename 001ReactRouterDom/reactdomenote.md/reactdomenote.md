# 🔰 What is React Router?

React Router is a standard routing library for React. It enables navigation between views/components in a React app, managing the URL and UI state seamlessly.
# 📘 React Router v6+ Notes

# install Raect Router dom
```
npm install react-router-dom 
```

---

## 🔹 Core Concepts

### 1. `BrowserRouter`
```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>

``` 
# 2. Routes & Route
 
 ```javascript 
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

 ```
 - <Routes> replaces older <Switch>.
 -  <Route> defines the path and corresponding component.

 # 3. Link vs NavLink

 ```javascript
 <Link to="/about">About</Link>
<NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
``` 
- <Link> is for navigation without page reload.
- <NavLink> provides styling for active routes. 
  # 4. useNavigate 

```javascript
const navigate = useNavigate();
navigate("/about");

```
- Programmatic navigation.

# 5. useParams
```javascript
<Route path="/user/:id" element={<User />} />
// inside User.jsx
const { id } = useParams();
```
-Gets route params.

# 6 Nested Routing 
```javascript
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>


```
# 7 Outlet
```javascript
// In Dashboard.jsx
<Outlet />

```
-Used to render nested child routes.

# 8  Redirects & Navigate
 ```javascript 
<Route path="/old" element={<Navigate to="/new" />} />

 ```
 # 📌 React Router v6 Features
- Component-based route declaration

- Nested routing with layout components

- Route object configuration support

- Navigate, Outlet, and hooks like        useNavigate, useLocation

 # ✅ Best Practices
- Use BrowserRouter only once at root.

- Use Link instead of <a> to avoid page reload.

- Group routes for better readability.

- Use dynamic and nested routes wisely.
  
  # 🔥 Interview Questions
1. What is React Router?
2. Difference between <Link> and <a>?
3. How does nested routing work?
4. Explain useNavigate and give an example.
5. What is Outlet in React Router?
6. How to protect a route? (Private Route Concept)
7. How to access URL parameters?
8. Difference between Switch and Routes?
9. How do query params differ from route params?
10. How can you implement lazy loading with React Router?

# 🔍 Advanced Tips
Combine React Router with Context/Auth for Private Routes.

Use route loaders in Remix or data fetching strategies.

React Router can now support data APIs for server-rendered frameworks (v6.4+).

For animations on route change, pair with libraries like Framer Motion.


# breaking all the poinnt 
```javascript
import { Routes, Route } from 'react-router-dom';

```
## ✅ Explanation:

You're importing two components from the react-router-dom package:

Routes: This is the wrapper for your individual route definitions. It replaces the older Switch from v5.

Route: Used to define each individual route and what component should show when the URL matches the route.

# Routes 
 
`<Routes>` 

#✅ Explanation:

Think of <Routes> as the container or router box that holds all of your page routes.

It looks at the current browser URL and picks the first matching route inside it to render. 

```javascript 

  <Route path="/" element={<Home />} />

```
# ✅ Explanation:

You're telling React Router:
👉 "When the path is exactly `('/' )`(the homepage), show the `<Home />` component."

`path="/": `This is the URL path. When a user visits` http://yourapp.com/,` it matches this route.

element`={<Home />}:` This is the component that should be rendered. It's passed as a JSX element to the element prop.


```javascript 

  <Route path="/about" element={<About />} />
 
```
# ✅ Explanation:

This defines another route: 👉 "When the path is /about, show the `<About />` component."

So if the user visits `http://yourapp.com/about,` they'll see the About page.

# Routes 

### ✅ Explanation:

Closing the Routes component. Now, React Router knows all the valid paths and components for your app.


# The important question 
- How to handle 404 Not Found pages

- How to add dynamic routes (like /user/:id)

- How to make Private Routes (for authentication)

# ✅ What is a 404 Page?
A 404 page is shown when a user visits a route that doesn't exist in your app.

### 🧠 Concept:
In React Router v6, you handle this by using a <Route path="*"> which matches all unmatched routes (i.e., anything that isn't defined above it).

#### ✅ Step-by-Step Implementation:
## 1 Create a NotFound.jsx Component
```javascript 
// src/pages/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="text-center mt-10 text-red-600 text-2xl font-bold">
      404 - Page Not Found 🚫
    </div>
  );
};

export default NotFound;


```
## 2 2. Add it to Your <Routes> in App.jsx

```javascript 

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* ⭐ 404 route must be LAST */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

```
# 🚀 What Are Dynamic Routes?
 - Dynamic routes contain parameters - that change depending on the data.
- @ Example:

### /user/1

### /user/45

### /user/jaivy

- Here, :id is the dynamic part of the URL.
  
# 📦 How useParams() Works
## useParams() is a hook from React Router that gives you an object of route parameters

```javascript 
// For URL: /user/123
const { id } = useParams(); // id = "123"

```
