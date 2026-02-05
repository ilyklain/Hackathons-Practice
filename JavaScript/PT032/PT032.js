/*
  -------------------------------------
  ‣ Pinterest Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Pinterest's grid relies on knowing the aspect ratio of images 
  before they load to prevent "Layout Shift". We need to calculate 
  the dynamic height a container should have based on a fixed 
  width.

  » Problem:
  Write a JavaScript function that returns the required height.

  The system should:
    - Receive: originalWidth, originalHeight, and targetWidth.
    - Maintain the exact aspect ratio.
    - Result: (targetWidth / originalWidth) * originalHeight.

  » Objective:
  Practice geometric math logic and responsiveness in JS.
*/

const calculateGridHeight = (oWidth, oHeight, tWidth) => {
    const ratio = tWidth / oWidth;
    return Math.round(oHeight * ratio);
};

// Example Usage
const imgWidth = 1200;
const imgHeight = 1600;
const containerWidth = 350;

const neededHeight = calculateGridHeight(imgWidth, imgHeight, containerWidth);

console.log("Pinterest Layout Optimizer");
console.log(`Image: ${imgWidth}x${imgHeight}`);
console.log(`Container Width: ${containerWidth}px`);
console.log(`Required Height: ${neededHeight}px`);
