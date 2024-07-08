const resultsContainer = document.getElementById("results");

export function displayResults(cats) {
  resultsContainer.innerHTML = "";
  cats.forEach((cat) => {
    const catCard = createCatCard(cat);
    resultsContainer.appendChild(catCard);
  });
}

export function displayError(message) {
  resultsContainer.innerHTML = "";
  const errorMessage = document.createElement("h1");
  errorMessage.textContent = message;
  resultsContainer.appendChild(errorMessage);
}

function createCatCard(cat) {
  const div = document.createElement("div");
  div.classList.add("catCard");

  const img = document.createElement("img");
  img.src = cat.url;
  img.alt = "Cat Image";
  div.appendChild(img);

  return div;
}
