// Function to toggle between generators
function showGenerator(type) {
    document.getElementById('name-generator').classList.add('hidden');
    document.getElementById('number-generator').classList.add('hidden');
    document.getElementById('color-generator').classList.add('hidden');
    document.getElementById('password-generator').classList.add('hidden');
    document.getElementById('joke-generator').classList.add('hidden');

    document.getElementById(`${type}-generator`).classList.remove('hidden');
}

// Function to generate a random name
function generateName() {
    const firstNames = ["John", "Emma", "James", "Sophia", "Michael", "Olivia"];
    const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Miller"];

    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    document.getElementById("name-result").textContent = `Generated Name: ${firstName} ${lastName}`;
}

// Function to generate six random numbers between 1 and 99
function generateNumbers() {
    let numbers = [];
    while (numbers.length < 6) {
        let randomNum = Math.floor(Math.random() * 49) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    document.getElementById("number-result").textContent = `Generated Numbers: ${numbers.join(', ')}`;
}

// Function to generate a random color
function generateColor() {
    let randomBgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomBgColor;
}

// Function to reset the website color
function resetColor() {
    document.body.style.backgroundColor = "#f5f5f5";
}

// Function to generate a strong password
function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password-result").textContent = `Generated Password: ${password}`;
}

// Function to fetch a random joke from an API
async function generateJoke() {
    try {
        let response = await fetch('https://official-joke-api.appspot.com/random_joke');
        let data = await response.json();
        document.getElementById("joke-result").textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
        document.getElementById("joke-result").textContent = "Oops! Couldn't fetch a joke. Try again!";
    }
}
