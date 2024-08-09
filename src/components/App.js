import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode on button click
  function handleDarkModeToggle() {
    setIsDarkMode(prevMode => !prevMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Toggle Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
