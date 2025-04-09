# Memory Game

A fun memory game built using React where players match pairs of cards. The game includes a selectable difficulty level (Easy, Medium, Hard) and tracks player performance, including attempts and time taken. Once the game is completed, a **"Congratulations"** popup with a confetti animation shows the player's score.

## Features

- **Difficulty Levels**: Easy, Medium, and Hard
- **Game Progress Tracking**: Displays attempts and time elapsed
- **Congratulations Popup**: Shows when the game is completed, including a confetti animation and score display
- **High Score Tracking**: The top scores are stored locally and displayed after each game
- **Local Storage**: Scores are saved in the browser's local storage

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **CSS**: Styles for the game
- **Lottie**: For confetti animation on game completion
- **Local Storage**: To persist high scores

## How to Run the Project

1. **Clone the Repository**:

   git clone https://github.com/Kronik502/Cardgame.git
Navigate to the Project Directory:

bash

cd memory-game
Install Dependencies: Run the following command to install required packages:

bash

npm install
Start the Development Server: Once dependencies are installed, run the project:

bash

npm start
This will start the React development server, and you can open the app in your browser at http://localhost:3000.

How to Play
Enter your name and select the difficulty level.
Start the game by clicking the "Start Game" button.
The goal is to match all the pairs of cards within the least number of attempts and time.
Once you match all the pairs, a Congratulations popup will appear with your score.
High scores are saved locally and displayed on the main screen.
Game Rules
The deck will contain pairs of cards. Each pair contains cards with the same value.
The game ends when all pairs are matched.
You can select a card to reveal its value, and another card to try and match it.
If two revealed cards match, they are considered a pair and will stay revealed.
If the cards don't match, they will be flipped back after a short delay.
High Score System
After completing the game, your score (based on time and attempts) is added to a local leaderboard.
The leaderboard is stored in the browser's local storage, and the top 10 scores will be displayed.
Dependencies
react: ^17.0.0
react-lottie-player: For rendering Lottie animations
License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown


---

### **Key Sections of the README:**

1. **Project Overview**: Describes the game and its features.
2. **Technologies Used**: Lists the tools and libraries used to build the game.
3. **Installation Instructions**: Guides the user on how to set up and run the project locally.
4. **How to Play**: Provides a simple guide on playing the game.
5. **Game Rules**: Explains the rules of the game and how players can win.
6. **High Score System**: Details the leaderboard functionality.

Screenshots:
   ![image](https://github.com/user-attachments/assets/9f767510-b493-45d3-a00b-8a898923a7bd)
   ![image](https://github.com/user-attachments/assets/5e708af3-215d-4a69-adb0-4f5f25bf1507)

