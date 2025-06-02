// Step 1: Initial Promise that resolves after 3 seconds with [1, 2, 3, 4]
function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Step 2: Filter out odd numbers after a 1-second delay
function filterEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evens = arr.filter(num => num % 2 === 0);
      document.getElementById("output").textContent = evens.join(",");
      resolve(evens);
    }, 1000);
  });
}

// Step 3: Multiply even numbers by 2 after a 2-second delay
function multiplyByTwo(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = arr.map(num => num * 2);
      document.getElementById("output").textContent = result.join(",");
      resolve(result);
    }, 2000);
  });
}

// Start the chain
getInitialArray()
  .then(filterEvenNumbers)
  .then(multiplyByTwo)
  .catch(error => console.error("Error during transformations:", error));
