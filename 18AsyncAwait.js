// Async function using Await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call async function
fetchData();
