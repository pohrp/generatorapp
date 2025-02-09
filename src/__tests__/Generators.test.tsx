import { describe, test, expect } from "vitest";
import { generateName, generateNumbers, generateColor, generatePassword, showGenerator } from "../main";

describe("Generator Functions", () => {
  test("generateName should return a valid name format", () => {
    const result = generateName();
    expect(result).toMatch(/Generated Name: \w+ \w+/);
  });

  test("generateNumbers should return an array of 6 unique numbers", () => {
    const numbers = generateNumbers();
    expect(numbers).toHaveLength(6);
    numbers.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(49);
    });

    // Ensure uniqueness
    const uniqueNumbers = new Set(numbers);
    expect(uniqueNumbers.size).toBe(6);
  });

  test("generateColor should return a valid hex color", () => {
    const color = generateColor();
    expect(color).toMatch(/^#[0-9A-F]{6}$/i);
  });

  test("generatePassword should return a 12-character password", () => {
    const password = generatePassword();
    expect(password).toHaveLength(12);
    expect(typeof password).toBe("string");
  });
});

describe("Navbar Generator Switching", () => {
  test("showGenerator should make the correct section visible", () => {
    document.body.innerHTML = `
      <div id="name-generator" class="generator hidden"></div>
      <div id="number-generator" class="generator hidden"></div>
    `;

    showGenerator("name");
    expect(document.getElementById("name-generator")!.classList.contains("hidden")).toBe(false);
    expect(document.getElementById("number-generator")!.classList.contains("hidden")).toBe(true);
  });
});
