
window.promises = [];

// Function to generate a promise that resolves after a random time
function generatePromise(min, max) {
  const delay = Math.floor(Math.random() * (max - min + 1) + min);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Promise resolved after ${delay} seconds`);
    }, delay * 1000);
  });
}

// Add your promises to the array
window.promises.push(generatePromise(1, 5));
window.promises.push(generatePromise(1, 5));
window.promises.push(generatePromise(1, 5));
window.promises.push(generatePromise(1, 5));
window.promises.push(generatePromise(1, 5));


// Do not change the code above this
// add your promises to the array `promises`
