

import React, { useState } from "react";

// Name, Number, Color, Password, and Joke Generators Component
const Generators: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [password, setPassword] = useState<string>("");
  const [joke, setJoke] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("white");
  const [visibleGenerator, setVisibleGenerator] = useState<string>("");

  // Function to toggle between generators
  const showGenerator = (type: string) => {
    setVisibleGenerator(type);
  };

  // Function to generate a random name
  const generateName = () => {
    const firstNames: string[] = ["John", "Emma", "James", "Sophia", "Michael", "Olivia"];
    const lastNames: string[] = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Miller"];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    setName(`Generated Name: ${firstName} ${lastName}`);
  };

  // Function to generate six random numbers between 1 and 99
  const generateNumbers = () => {
    const generatedNumbers: number[] = [];
    while (generatedNumbers.length < 6) {
      let randomNum = Math.floor(Math.random() * 49) + 1;
      if (!generatedNumbers.includes(randomNum)) {
        generatedNumbers.push(randomNum);
      }
    }
    setNumbers(generatedNumbers);
  };

  // Function to generate a random color
  const generateColor = () => {
    const randomBgColor: string = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomBgColor);
  };

  // Function to reset the website color
  const resetColor = () => {
    setBgColor("white");
  };

  // Function to generate a strong password
  const generatePassword = () => {
    const length: number = 12;
    const charset: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?";
    let generatedPassword: string = "";

    for (let i = 0; i < length; i++) {
      const randomIndex: number = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(`Generated Password: ${generatedPassword}`);
  };

  // Function to fetch a random joke from an API
  const generateJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke("Oops! Couldn't fetch a joke. Try again!");
    }
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <h1>Generators</h1>
      <button onClick={() => showGenerator("name")}>Name Generator</button>
      <button onClick={() => showGenerator("number")}>Number Generator</button>
      <button onClick={() => showGenerator("color")}>Color Generator</button>
      <button onClick={() => showGenerator("password")}>Password Generator</button>
      <button onClick={() => showGenerator("joke")}>Joke Generator</button>

      {visibleGenerator === "name" && (
        <div>
          <h2>Name Generator</h2>
          <button onClick={generateName}>Generate Name</button>
          <p>{name}</p>
        </div>
      )}

      {visibleGenerator === "number" && (
        <div>
          <h2>Number Generator</h2>
          <button onClick={generateNumbers}>Generate Numbers</button>
          <p>Generated Numbers: {numbers.join(", ")}</p>
        </div>
      )}

      {visibleGenerator === "color" && (
        <div>
          <h2>Color Generator</h2>
          <button onClick={generateColor}>Generate Color</button>
          <button onClick={resetColor}>Reset Color</button>
        </div>
      )}

      {visibleGenerator === "password" && (
        <div>
          <h2>Password Generator</h2>
          <button onClick={generatePassword}>Generate Password</button>
          <p>{password}</p>
        </div>
      )}

      {visibleGenerator === "joke" && (
        <div>
          <h2>Joke Generator</h2>
          <button onClick={generateJoke}>Generate Joke</button>
          <p>{joke}</p>
        </div>
      )}
    </div>
  );
};

export default Generators;

