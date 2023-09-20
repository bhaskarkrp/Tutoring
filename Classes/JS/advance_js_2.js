// setTimeout, setInterval -> browser methods
// milliseconds = seconds * 1000;

let method = function () {
  console.log(`called method callback`);
};

// run the callback function once after the timeout
setTimeout(method, 5000);

// run the callback function every given amount of milliseconds
setInterval(method, 2000);

// async - asynchronous -> non blocking
// sync - synchronous -> blocking

function synchronous() {
  console.log("first");
  console.log("second");
  console.log("third");
}

synchronous();

function asynchronous() {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
  }, 0);
  console.log("Step 3");
}

asynchronous();

// ** Javascript -> single threaded language - it goes one line at a time

// callback to handle asynchronous calls
// callback to handle -> pyramid like structure, that is hard to handle, maintain and reduces readablity -> callbacks hell

// primoises -> E56 -> handles asynchronous calls but in efficient way
// they represent a value that might be available now, in the future, or never.

// Promises have four states: pending, fulfilled, settled, or rejected.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      resolve(`xuz - ${randomNum}`);
    } else {
      reject(`Error: Random number too high - ${randomNum}`);
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log("Promise resolved with result", result);
  })
  .catch((error) => {
    console.log("Promise rejected with error", error);
  });

// The fetch API is used to make network requests (e.g., to fetch data from a server). It returns a Promise that resolves to the response to that request.

// Example using Fetch API: fetch

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// async await -> keyword in js => handles asynchronous calls
// async function abc() {}

const fetchApi = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
};

fetchApi();
