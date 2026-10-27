/**
 * Personal Portfolio - JavaScript Introduction
 * ByteXL Week 1 Project
 * 
 * Demonstrates:
 * - Variable declarations (const, let)
 * - Template literals (${...})
 * - Data types and the typeof operator
 * - Console output
 */

// 1. Declare developer information using modern ES6+ keywords
const developerName = "Mohit Kumar Rana";
const role = "Data Analyst & AI Undergraduate";
let age = 20;

// Array of core technical competencies
const skills = [
  "SQL (MySQL & SQLite)",
  "Python & Data Science",
  "Microsoft Power BI",
  "Machine Learning",
  "DSA in Java & C++",
  "Git & GitHub"
];

// 2. Format introduction using template literals
const introMessage = `
========================================
👋 Welcome to my Portfolio Website!
Name: ${developerName}
Age: ${age}
Role: ${role}
Core Skills: ${skills.join(", ")}
========================================
`;

// 3. Output greeting to browser console
console.log(introMessage);

// 4. Demonstrating typeof operator for foundational JavaScript understanding
console.log("--- Typeof Inspection ---");
console.log(`typeof developerName : ${typeof developerName}`); // string
console.log(`typeof age           : ${typeof age}`);           // number
console.log(`typeof skills        : ${typeof skills}`);        // object (array)
console.log(`Array.isArray(skills): ${Array.isArray(skills)}`); // true

