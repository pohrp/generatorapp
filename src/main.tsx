// ✅ Exportable functions for testing & HTML usage
export const generateName = (): string => {
  const firstNames = ['John', 'Emma', 'James', 'Sophia', 'Michael', 'Olivia', 'anthony'];
  const lastNames = [
    'tan', 'goh', 'sim'
  ];
  return `Generated Name: ${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

export const generateNumbers = (): number[] => {
  const numbers: number[] = [];
  while (numbers.length < 6) {
    const randomNum = Math.floor(Math.random() * 49) + 1;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers;
};

export const generateColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const generatePassword = (): string => {
  const length = 12;
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?';
  return Array.from(
    { length },
    () => charset[Math.floor(Math.random() * charset.length)]
  ).join('');
};

// ✅ Navbar switching functionality
export const showGenerator = (type: string) => {
  document
    .querySelectorAll('.generator')
    .forEach((el) => el.classList.add('hidden'));
  document.getElementById(`${type}-generator`)?.classList.remove('hidden');
};

// ✅ Attach event listeners for HTML
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const type = (e.target as HTMLAnchorElement).dataset.type!;
      showGenerator(type);
    });
  });

  document
    .getElementById('generate-name-btn')
    ?.addEventListener('click', () => {
      document.getElementById('name-result')!.textContent = generateName();
    });

  document
    .getElementById('generate-number-btn')
    ?.addEventListener('click', () => {
      document.getElementById('number-result')!.textContent =
        `Generated Numbers: ${generateNumbers().join(', ')}`;
    });

  document
    .getElementById('generate-color-btn')
    ?.addEventListener('click', () => {
      document.body.style.backgroundColor = generateColor();
    });

  document.getElementById('reset-color-btn')?.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
  });

  document
    .getElementById('generate-password-btn')
    ?.addEventListener('click', () => {
      document.getElementById('password-result')!.textContent =
        generatePassword();
    });
});
