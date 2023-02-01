// Write your code in this file!

const currentUser = "Sam Genevay";

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
console.log(welcomeMessage);

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Using bracket notation
// const shortGreeting = `Welcome, ${currentUser[0]}!`;

// Using slice
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;