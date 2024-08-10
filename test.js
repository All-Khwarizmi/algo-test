import { calculateTotalDuration } from "./solution.js";
const periods = [
  { start: "08:00", end: "10:30" },
  { start: "12:00", end: "13:45" },
  { start: "14:00", end: "16:15" },
];

const soluce = calculateTotalDuration(periods);
console.assert(
  soluce === "6 heures et 30 minutes",
  `La durée doit être de '6 heures et 30 minutes' mais reçu  ${soluce}`
);

// Test 1: Test de base avec trois périodes
const periods1 = [
  { start: "08:00", end: "10:30" },
  { start: "12:00", end: "13:45" },
  { start: "14:00", end: "16:15" },
];
let soluce1 = calculateTotalDuration(periods1);
console.assert(
  soluce1 === "6 heures et 30 minutes",
  `La durée doit être de '6 heures et 30 minutes' mais reçu ${soluce1}`
);

// Test 2: Test avec une seule période
const periods2 = [{ start: "09:00", end: "10:00" }];
let soluce2 = calculateTotalDuration(periods2);
console.assert(
  soluce2 === "1 heures et 0 minutes",
  `La durée doit être de '1 heures et 0 minutes' mais reçu ${soluce2}`
);

// Test 3: Test avec des périodes consécutives
const periods3 = [
  { start: "08:00", end: "09:00" },
  { start: "09:00", end: "10:00" },
  { start: "10:00", end: "11:00" },
];
let soluce3 = calculateTotalDuration(periods3);
console.assert(
  soluce3 === "3 heures et 0 minutes",
  `La durée doit être de '3 heures et 0 minutes' mais reçu ${soluce3}`
);

// Test 4: Test avec des périodes chevauchantes
const periods4 = [
  { start: "08:00", end: "09:30" },
  { start: "09:00", end: "10:30" },
];
let soluce4 = calculateTotalDuration(periods4);
console.assert(
  soluce4 === "3 heures et 0 minutes",
  `La durée doit être de '3 heures et 0 minutes' mais reçu ${soluce4}`
);

// Test 5: Test avec une période sur une minute
const periods5 = [{ start: "09:59", end: "10:00" }];
let soluce5 = calculateTotalDuration(periods5);
console.assert(
  soluce5 === "0 heures et 1 minutes",
  `La durée doit être de '0 heures et 1 minutes' mais reçu ${soluce5}`
);

// Test 6: Test avec une durée de zéro minute
const periods6 = [{ start: "10:00", end: "10:00" }];
let soluce6 = calculateTotalDuration(periods6);
console.assert(
  soluce6 === "0 heures et 0 minutes",
  `La durée doit être de '0 heures et 0 minutes' mais reçu ${soluce6}`
);

// Test 7: Test avec des périodes sur 24 heures
// const periods7 = [{ start: "23:00", end: "01:00" }];
// let soluce7 = calculateTotalDuration(periods7);
// console.assert(
//   soluce7 === "2 heures et 0 minutes",
//   `La durée doit être de '2 heures et 0 minutes' mais reçu ${soluce7}`
// );

//
