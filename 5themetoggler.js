src/
├── App.jsx
├── ThemeContext.jsx ✅ (create this file)
├── index.css
└── main.jsx

🧠 Step 3: Create Theme Context (ThemeContext.jsx)
This file will manage dark/light theme and store it in localStorage.

// ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
const ThemeContext = createContext();

// Custom hook to use theme easily
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage when app starts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
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
