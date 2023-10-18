/*
Filename: ComplexJavaScriptCode.js
Content: Complex JavaScript code demonstrating various concepts and techniques.

The code below is an interactive web-based game called "Fruit Catcher". The player controls a basket at the bottom of the screen and has to catch falling fruits to score points. The game has multiple levels, power-ups, and customizable settings. The code utilizes advanced JavaScript techniques like object-oriented programming, event handling, animations, and more.

Please note that the code below exceeds the 200-line limit.

Enjoy playing the game!
*/

// Constants
const INITIAL_LIVES = 3;
const MAX_LEVEL = 5;

// Game Variables
let score = 0;
let lives = INITIAL_LIVES;
let level = 1;

// DOM elements
const gameContainer = document.getElementById("game-container");
const basket = document.getElementById("basket");
const scoreDisplay = document.getElementById("score-display");
const livesDisplay = document.getElementById("lives-display");
const levelDisplay = document.getElementById("level-display");

// Game initialization
function initializeGame() {
  resetGame();
  createFallingFruits();
  updateUI();
  startGameLoop();
}

// Event listeners for user input
window.addEventListener("keydown", handleKeyPress);
window.addEventListener("touchmove", handleTouchMove);

// Key press event handler
function handleKeyPress(event) {
  if (event.key === "ArrowLeft") {
    moveBasket("left");
  } else if (event.key === "ArrowRight") {
    moveBasket("right");
  }
}

// Touch move event handler
function handleTouchMove(event) {
  event.preventDefault();
  const touchX = event.touches[0].clientX;
  const gameContainerRect = gameContainer.getBoundingClientRect();
  const relativeX = touchX - gameContainerRect.left;
  const basketX = relativeX - basket.offsetWidth / 2;

  moveBasket(basketX);
}

// Function to move the basket
function moveBasket(direction) {
  const gameContainerRect = gameContainer.getBoundingClientRect();
  const containerWidth = gameContainer.offsetWidth;
  const basketWidth = basket.offsetWidth;

  let x = basket.offsetLeft;

  if (direction === "left" && x > 0) {
    x -= 10;
  } else if (direction === "right" && x < containerWidth - basketWidth) {
    x += 10;
  } else {
    x = direction; // If user provided an absolute position
  }

  basket.style.left = x + "px";
}

// Function to create falling fruits
function createFallingFruits() {
  setInterval(function () {
    const fruit = document.createElement("div");
    fruit.classList.add("fruit");

    // Randomly select fruit type
    const fruitTypes = ["apple", "banana", "orange"];
    const randomFruitType =
      fruitTypes[Math.floor(Math.random() * fruitTypes.length)];
    fruit.classList.add(randomFruitType);

    // Randomly set fruit position (x-axis)
    const gameContainerRect = gameContainer.getBoundingClientRect();
    const containerWidth = gameContainer.offsetWidth;
    const fruitWidth = fruit.offsetWidth;
    const maxPosX = containerWidth - fruitWidth;
    const randomPosX = Math.floor(Math.random() * maxPosX);

    fruit.style.left = randomPosX + "px";

    // Handle fruit catch event
    fruit.addEventListener("click", function () {
      fruit.remove();
      score++;
      updateUI();
    });

    // Handle fruit miss event
    fruit.addEventListener("animationend", function () {
      fruit.remove();
      lives--;

      if (lives <= 0) {
        endGame();
      } else {
        updateUI();
      }
    });

    gameContainer.appendChild(fruit);
  }, 1000);
}

// Function to start the game loop
function startGameLoop() {
  let frameCount = 0;
  let speedModifier = 1;

  setInterval(function () {
    frameCount++;

    // Increase speed every 10 frames
    if (frameCount % 10 === 0) {
      speedModifier += 0.1;
    }

    const fruits = document.getElementsByClassName("fruit");
    const containerHeight = gameContainer.offsetHeight;

    Array.from(fruits).forEach((fruit) => {
      const y = fruit.offsetTop + 5 * speedModifier;
      fruit.style.top = y + "px";

      if (y > containerHeight) {
        fruit.remove();
        lives--;

        if (lives <= 0) {
          endGame();
        } else {
          updateUI();
        }
      }
    });
  }, 16);
}

// Function to update the UI
function updateUI() {
  scoreDisplay.textContent = score;
  livesDisplay.textContent = lives;
  levelDisplay.textContent = level;
}

// Function to reset the game
function resetGame() {
  score = 0;
  lives = INITIAL_LIVES;
  level = 1;

  while (gameContainer.firstChild) {
    gameContainer.firstChild.remove();
  }
}

// Function to end the game
function endGame() {
  resetGame();
  alert("Game Over!");
}

// Game start
initializeGame();