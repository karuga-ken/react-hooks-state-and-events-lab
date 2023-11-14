import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // this tracks whether we have dark mode or not
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const toggleDarkMode = () => { //handles the darkmode toogling
    setIsDarkMode(prevMode => !prevMode);
  };

  // Dynamically set the className based on the isDarkMode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* button to set darkmode in the app */}
        <button onClick={toggleDarkMode}> 
          {isDarkMode ? "Light Mode" : "Dark Mode"} 
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
