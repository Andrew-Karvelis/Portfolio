// src/App.tsx
import React from "react";

const App: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav>
        <ul className="flex justify-around">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default App;
