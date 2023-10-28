const root = document.getElementById('root');
const main = document.createElement('div');
root.append(main);

const heading = document.createElement('h1');
const line = document.createElement('hr');
heading.innerText = 'NUMBRLE';
main.append(heading);
main.append(line);

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
main.append(gridContainer);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
main.append(buttonContainer);

const attempts = 5;
const numbersPerAttempt = 5;
let entry = '';

for (let attempt = 1; attempt <= attempts; attempt++) {
  for (let number = 1; number <= numbersPerAttempt; number++) {
    entry = document.createElement('div');
    entry.id = `entry_${attempt}_${number}`;
    entry.classList.add('entry');
   // entry.innerText = number;
    gridContainer.append(entry);
  }
}

function createRandomNumber (min, max) {
  const randomNumber = Math.floor(Math.random() * (max +1 - min) + min);
  return randomNumber;
}

function getSecretNumberAsArray ({maxNumberLenght}) {
  const secretNumberArray = [];
  // finish
}

function createButtons() {
  const button = [];

  for (let i = 0; i < 10; i++) {
    button[i] = document.createElement('button');
    button[i].innerHTML = [i];
    button[i].classList.add('buttons', 'btn' + [i]);
    buttonContainer.append(button[i]);
  }
  const buttonEnter = document.createElement('button');
  buttonEnter.innerHTML = 'Enter ↵';
  buttonEnter.classList.add('buttons', 'under', 'enter');
  buttonContainer.append(buttonEnter);

  const buttonDelete = document.createElement('button');
  buttonDelete.innerHTML = 'Back ⌫';
  buttonDelete.classList.add('buttons', 'under', 'enter');
  buttonContainer.append(buttonDelete);

  return button;
}
console.log(createButtons());

console.log(root);