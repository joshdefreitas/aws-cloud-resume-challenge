//JS Code

async function updateCounter() {
  try {
    const test = document.getElementById("counter");
    let response = await fetch(
      "https://a89uwhey92.execute-api.us-east-2.amazonaws.com/dev"
    );
    let data = await response.json();
    test.innerText = "Views: " + data.count;
  } catch (error) {
    const test = document.getElementById("counter");
    test.innerText = "Couldn't retrieve views";
  }
}
updateCounter();
