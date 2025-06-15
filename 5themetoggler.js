src/
├── App.jsx
├── ThemeContext.jsx ✅ (create this file)
├── index.css
└── main.jsx



🧠 Step 3: Create Theme Context (ThemeContext.jsx)
This file will manage dark/light theme and store it in localStorage.



  // ThemeContext.jsx

import React, { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ Create a new Theme Context
// This is like a container that will hold our theme data
const ThemeContext = createContext();

// 2️⃣ Create a shortcut (custom hook) to easily access the theme context
export const useTheme = () => {
  // useContext helps us read the value from ThemeContext
  return useContext(ThemeContext);
};

// 3️⃣ Create a ThemeProvider component
// This will wrap our App and provide the theme value to all components
export const ThemeProvider = ({ children }) => {
  // Create a state to keep track of the current theme (light/dark)
  const [theme, setTheme] = useState("light");

  // 🔁 This will run only once when the app starts (like componentDidMount)
  useEffect(() => {
    // Try to get saved theme from localStorage (if user visited before)
    const savedTheme = localStorage.getItem("theme");

    // If we found a saved theme, use it. Otherwise, use "light"
    const initialTheme = savedTheme || "light";

    setTheme(initialTheme); // Set the state
    document.body.className = initialTheme; // Apply it to the body
  }, []);

  // 🌗 This function toggles between light and dark mode
  const toggleTheme = () => {
    // If current theme is light, switch to dark — and vice versa
    const newTheme = theme === "light" ? "dark" : "light";

    // Update the state with new theme
    setTheme(newTheme);

    // Save the new theme in localStorage so it stays after refresh
    localStorage.setItem("theme", newTheme);

    // Apply the new theme to the body
    document.body.className = newTheme;
  };

  // 🔁 Return the ThemeContext.Provider
  // It will give "theme" and "toggleTheme" to all components inside it
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Render the child components */}
    </ThemeContext.Provider>
  );
};




🚀 Step 5: Wrap App with ThemeProvider (main.jsx)
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



💻 Step 4: Use Theme in App.jsx
// App.jsx
import React from "react";
import { useTheme } from "./ThemeContext";
import "./index.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;



🎨 Step 6: Styling (index.css)
/* index.css */
body.light {
  background-color: white;
  color: black;
}

body.dark {
  background-color: #1e1e1e;
  color: white;
}

.container {
  text-align: center;
  padding-top: 100px;
  font-family: sans-serif;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  border-radius: 5px;
}
